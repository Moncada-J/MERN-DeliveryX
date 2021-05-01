import React from 'react';
import {Link} from 'react-router-dom';

function DeliveryCard({delivery}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>Delivery {delivery.trackNum}</h3>
      </div>
      <div className='panel-body'>
        <dl>
            <dt>Delivery Status</dt>
          <dd>{delivery.status}</dd>
          <dt>Package Weight</dt>
          <dd>{delivery.weight}</dd>
          <dt>Recipient Details</dt>
          <dd>{delivery.recipName}</dd>
          <dd>{delivery.location}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>BACK TO DELIVERIES</Link>
      </div>
    </div>
  );
}

export default DeliveryCard;