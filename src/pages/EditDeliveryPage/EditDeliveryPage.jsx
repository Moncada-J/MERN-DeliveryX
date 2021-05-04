import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';


function EditDeliveryPage(props) {
    const location = useLocation();
    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.deliveries)
    
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity()
         ? setValidForm(false) 
         : setValidForm(true)
    }, [formData]);
    
    const handleSubmit = e => {
        e.preventDefault();
        props.handleUpdateDelivery(formData);
    };

    const handleChange = e => {
        setFormData({
            ...formData,
                [e.target.name]: e.target.value
            });
        };
    
    return (
        <>
            <h1>Process Delivery Transcript </h1>
            <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Delivery Status</label>
                 <select 
                    value={formData.status}
                    name="status" 
                     className="form-control"
                      onChange={handleChange}
                      required>
                        <option>
                         Delivered to Resident
                        </option>
                        <option>
                            Left on Doorstep
                        </option>
                         <option>
                            Unable to Deliver
                        </option>
                    </select>
                </div>
                <div className="form-group">
                <label>Items Delivered</label>
                <input type="number" className="form-control" name="itemQty" value={formData.itemQty} onChange={handleChange}
                required
                />
            </div>
            <button
            type="submit"
            className="btn"
            disabled={invalidForm}
             >
          Submit
         </button>
        <Link to='/'>DISCARD</Link>
     </form>
    </>
    );
}

export default EditDeliveryPage;