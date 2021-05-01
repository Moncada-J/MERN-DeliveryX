import React from 'react';
import DeliveryListItem from '../../Components/DeliveryListItem/DeliveryListItem';

 function DeliveryListPage(props) {
	return (
		<>
		<h1>Deliveries Ready </h1>
		<h5>The following orders have passed checkpoints and are awaiting delivery to the select destinations.</h5>
		<div className="DeliveryListItem-grid">
				{props.deliveries.map(delivery =>
					<DeliveryListItem
					delivery={delivery}
					key={delivery._id}
					/>
					)}
		</div>
		</>
		);
	}


export default DeliveryListPage;