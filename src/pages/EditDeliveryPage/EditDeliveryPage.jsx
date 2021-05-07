import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './EditDeliveryPage.css';

function EditDeliveryPage(props) {
    const { state: {deliveries} } = useLocation();
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
            <h1 className="editPageTitle">Process the Delivery Transcript </h1>
            <form ref={formRef} autoComplete="off" onSubmit={handleSubmit} className="editForm">
                <div className="form-group">
                    <label className="editLabel">Update Delivery Status</label>
                    <select 
                        value={formData.status}
                        name="status" 
                        className="form-control editStatus"
                        onChange={handleChange}
                        required>
                            <option>
                            Delivered to Resident
                            </option>
                            <option>
                                Left on Doorstep
                            </option>
                            <option>
                                Delivered to Resident Mailbox
                            </option>
                            <option>
                                Delivered to Front Office
                            </option>
                            <option>
                                Unable to Deliver
                            </option>
                        </select>
                </div>
                <div className="form-group">
                <label className="editLabel">Items Delivered</label>
                <input type="number" className="form-control editItemQty" name="itemQty" value={formData.itemQty} onChange={handleChange}
                required
                />
            </div>
            <button
    
            type="submit"
            className="editSubmitBtn  btn btn-md"
            disabled={invalidForm}
             >
          SUBMIT
         </button>
          <Link 
                className='btn btn-sm btn-info cancelLink'
                to={{ 
                    pathname: '/',
                    state: { deliveries },
                }} 
         >CANCEL</Link>
     </form>
    </>
    );
}

export default EditDeliveryPage;