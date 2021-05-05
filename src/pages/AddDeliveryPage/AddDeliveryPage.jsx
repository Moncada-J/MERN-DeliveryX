import React, { Component, useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import './AddDeliveryPage.css'

export default function AddDeliveryPage({ handleAddDelivery } ) {
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
    handleAddDelivery(formData);
  }
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };
  return(
    <>
       <h1 className="newDeliveryPageTitle">Add a Delivery to Your Route</h1>
       <span>Disclaimer: Make sure the inputted info matches the package label for each package!</span>
   <div className="newFormContainer">
    <Form className="NewDeliveryForm" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <Form.Row className="newFormRow">
        <Form.Group as={Col} controlId="formGridName" className='newNameInp' >
          <Form.Label className="newFormLabel">Recipient Name</Form.Label>
          <Form.Control type="name" placeholder="John Smith" name="recipName"
             value={formData.recipName} onChange={handleChange}
            required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumber" className='newNumInp' >
          <Form.Label className="newFormLabel"> Item Count</Form.Label>
          <Form.Control type="number" placeholder="1" name="itemQty" value={formData.itemQty} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumber" className='newNumInp' >
          <Form.Label className="newFormLabel"> Weight (lbs)</Form.Label>
          <Form.Control type="number" placeholder="5" name="weight" value={formData.weight} onChange={handleChange}/>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1" className='newAddressInp'>
        <Form.Label className="newFormLabel">Recipient Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2"  className='newAddressInp' >
        <Form.Label className="newFormLabel">Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

    <Form.Row className="newFormRow">
      <Form.Group as={Col} controlId="formGridCity"  className='newSelect' >
        <Form.Label className="newFormLabel">City</Form.Label>
        <Form.Control as="select" defaultValue="Choose..." select value={formData.location} className="form-control" name="location" onChange={handleChange}>
          <option>Select...</option>
          <option>Anacortes</option>
          <option>Bellevue</option>
           <option>Kirkland</option>
          <option>Mill Creek</option>
          <option>Redmond</option>
          <option>Seattle</option>
          <option>Shoreline</option>
          <option>Tacoma</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState"  className='newSelect' >
        <Form.Label className="newFormLabel">State</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Select...</option>
          <option>WA</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip"  className='newZipInp' >
        <Form.Label className="newFormLabel">Zip</Form.Label>
        <Form.Control placeholder="12345" />
      </Form.Group>
    </Form.Row>
    <Form.Row className="newFormRow"> 
        <Form.Group as={Col} controlId="formGridCity"  className='newStatus' >
        <Form.Label className="newFormLabel">Delivery Status</Form.Label>
        <Form.Control as="select" defaultValue="Select..." value={formData.status} className="form-control" name="status" 
                    onChange={handleChange}>
          <option>Select</option>
          <option>Shipped</option>
          <option>In Route</option>
        </Form.Control>
      </Form.Group>

      <Button className="newBtn" variant="primary" type="submit"  disabled={invalidForm}>
        Submit
      </Button>
      </Form.Row>
      </Form>
    </div>
  </>
  );
}
