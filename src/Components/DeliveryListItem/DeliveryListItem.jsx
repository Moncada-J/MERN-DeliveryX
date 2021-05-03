import React from 'react';
import {Link} from 'react-router-dom';
import './DeliveryListItem.css';

function DeliveryListItem({deliveries, handleDeleteDelivery }) {
    return (
    <div className='panel panel-default deliveryDiv'>
			<div className='panel-heading'>
				<h3 className="packageTitle">Package {deliveries.trackNum}</h3>
				<Link
					className='btn btn-lg btn-info detailsLink'
					to={{
						pathname: '/details',
						state: { deliveries },
					}}
				>TRACK</Link>
			</div>
			<div className='panel-footer DeliveryListItem-action-panel'>
        <span className="destinationTitle"><strong>Destination</strong> {deliveries.location}, WA</span>
        < br />
		<span className="itemsQtyTitle"><strong>Item(s) Contained</strong> {deliveries.itemQty} </span>
		< br />
				<button className="delete-btn" 
					onClick={() => handleDeleteDelivery(deliveries._id)}>
					CANCEL 
				</button>
			</div>
		</div>
    )
}

export default DeliveryListItem;