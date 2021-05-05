import React from 'react';
import {Link} from 'react-router-dom';
import './DeliveryCard.css';
function DeliveryCard({deliveries}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title deliveryCardTitle'>Package - {deliveries.trackNum}</h3>
      </div>
      <div className='panel-body deliveryCard'>
        <dl>
            <dt>Delivery Status</dt>
          <dd>{deliveries.status}</dd>
          <dt> Weight (lbs)</dt>
          <dd>{deliveries.weight} </dd>
          <dt> Item(s) Quantity</dt>
          <dd>{deliveries.itemQty} </dd>
          <dt>Recipient Name</dt>
          <dd>{deliveries.recipName}</dd>
          <dt>Destination Details</dt>
          <dd>{deliveries.address} {deliveries.city}, {deliveries.state}</dd>
        </dl>
      </div>
    </div>
  );
}

export default DeliveryCard;