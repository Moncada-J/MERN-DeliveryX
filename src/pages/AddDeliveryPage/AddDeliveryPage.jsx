import React, { Component, useState, useRef, useEffect } from 'react';

export default function AddDeliveryPage(props){
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    recipName: ' ',
    weight: '3',
    location: ' ',
  });
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity()
     ? setValidForm(false) 
     : setValidForm(true);
  }, [formData]);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleAddDelivery(formData);
  }
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  return(
    <>
       <h1>Add a Delivery to your Route</h1>
       <span>Disclaimer: Make sure the inputted info matches the package label for each package!</span>
       <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
         <div className="form-group">
            <label>Recipient Name</label>
            <input type="name" className="form-control" name="recipName"
             value={formData.recipName} onChange={handleChange}
            required 
            />
         </div>
         <div className="form-group">
            <label>Quantity of Items</label>
            <input type="number" className="form-control" name="itemQty" value={formData.itemQty} onChange={handleChange}
            required
            />
         </div>
         <div className="form-group">
            <label>Package Weight</label>
            <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange}
            required
            />
         </div>
         <div className="form-group">
           <label>Delivery Location (Greater Seattle Area)</label>
           <select value={formData.location} className="form-control" name="location" onChange={handleChange}>
             <option>
               Seattle
             </option>
              <option>
               Bellevue
             </option>
              <option>
               Kirkland
             </option>
              <option>
               Tacoma
             </option>
              <option>
               Redmond
             </option>
              <option>
               Shoreline
             </option>
              <option>
               Mill Creek
             </option>
              <option>
               Lynnwood
             </option>
           </select>
         </div>
          <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          Update Deliveries
        </button>
       </form>
    </>
  );
}
