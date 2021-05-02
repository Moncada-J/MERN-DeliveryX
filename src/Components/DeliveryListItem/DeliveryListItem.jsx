import React from 'react';
import {Link} from 'react-router-dom';


function DeliveryListItem({deliveries, handleDeleteDelivery }) {
    return (
    <div className='panel panel-default'>
			<div className='panel-heading'>
				<h2 className='panel-title'>Package {deliveries.trackNum}</h2>
			</div>
			<div className='panel-footer DeliveryListItem-action-panel'>
        <span><strong>Destination</strong> {deliveries.location} </span>
        < br />
		<span><strong>Item(s) Contained</strong> {deliveries.itemQty} </span>
		< br />
  				<Link
					className='btn btn-lg btn-info'
					to={{
						pathname: '/details',
						state: { deliveries },
					}}
				>
					Shipment Detail
				</Link>
				<button className="delete-btn" 
					onClick={() => handleDeleteDelivery(deliveries._id)}>
					CANCEL 
				</button>
			</div>
		</div>
    )
}

export default DeliveryListItem;