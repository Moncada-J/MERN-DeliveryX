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
          <dd>{deliveries.status ? 'delivered' : 'not delivered' } </dd>
          <dt>Package Weight</dt>
          <dd>{deliveries.weight} LBS </dd>
          <dt>Recipient Details</dt>
          <dd>{deliveries.recipName}</dd>
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