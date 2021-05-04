import React from 'react';
import {Link} from 'react-router-dom';

function DeliveryCard({deliveries}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>Package - {deliveries.trackNum}</h3>
      </div>
      <div className='panel-body'>
        <dl>
            <dt>Delivery Status</dt>
          <dd>{deliveries.status}</dd>
          <dt> Weight (lbs)</dt>
          <dd>{deliveries.weight} </dd>
          <dt> Item(s) Delivered</dt>
          <dd>{deliveries.itemQty} </dd>
          <dt>Recipient Name</dt>
          <dd>{deliveries.recipName}</dd>
          <dt>Delivery</dt>
          <dd>{deliveries.location}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>BACK TO DELIVERIES</Link>
      </div>
    </div>
  );
}

export default DeliveryCard;