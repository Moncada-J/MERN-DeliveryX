import React, { Component, useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import './AddDeliveryPage.css'

export default function AddDeliveryPage(props ) {
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
       <h1 className="newDeliveryPageTitle">Add a Delivery to your Route</h1>
       <span>Disclaimer: Make sure the inputted info matches the package label for each package!</span>
       {/* <form className="NewDeliveryForm" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
         <div className="form-group">
            <label>Recipient Name</label>
            <input type="name" className="form-control" name="recipName"
             value={formData.recipName} onChange={handleChange}
            required 
            />
         </div> */}
          {/* <div className="form-group">
                    <label>Delivery Status</label>
                    <select value={formData.status} className="form-control" name="status" 
                    onChange={handleChange}>
                        <option>
                         Shipped
                        </option>
                        <option>
                         In Route
                        </option>
                        <option>
                         Delivered
                        </option>
                    </select>
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
          className="btn newDeliveryBtn"
          disabled={invalidForm}
        >
          Submit
        </button>
    </form> */}
    <Form className="NewDeliveryForm" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Recipient Full Name</Form.Label>
          <Form.Control type="name" placeholder="John Smith" name="recipName"
             value={formData.recipName} onChange={handleChange}
            required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>City</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>Bellevue</option>
          <option>Bellevue</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>WA</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>

    {/* <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </>
  );
}
