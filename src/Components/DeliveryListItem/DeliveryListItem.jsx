// import React from 'react';
// import {Link} from 'react-router-dom';


function DeliveryListItem({deliveries }) {
    return (
        
      <div className="DeliveryListItem">
      <div className="trackingNum flex-ctr-ctr">{deliveries.trackNum}</div>
      <div className="name">{deliveries.location}</div>
      <div className="buy">
        <span>LBS{deliveries.weight.toFixed(2)}</span>
      </div>
    </div>
    )
}

export default DeliveryListItem;