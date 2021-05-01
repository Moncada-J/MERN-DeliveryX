import React, { Component, useState, useRef, useEffect } from 'react';

export default function AddDeliveryPage(props){
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    recipName: ' ',
    weight: '3',
    location: ' ',
    status: 'false'
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
            <label>Package Weight</label>
            <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange}
            required
            />
         </div>
         <div className="form-group">
           <label>Delivery Location (Greater Seattle Area)</label>
           <select value={formData.location} className="form-control" name="location" onChange={handleChange}>
             <option>
               SEATTLE
             </option>
              <option>
               BELLEVUE
             </option>
              <option>
               KIRKLAND
             </option>
              <option>
               SEATTLE
             </option>
              <option>
               TACOMA
             </option>
              <option>
               REDMOND
             </option>
              <option>
               SHORELINE
             </option>
              <option>
               MILL CREEK
             </option>
              <option>
               LYNNWOOD
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
