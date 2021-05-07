import React from 'react';
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBListGroup,
 MDBListGroupItem } from 'mdb-react-ui-kit';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import './DeliveryListItem.css';

function DeliveryListItem({deliveries, handleDeleteDelivery }) {
    return (
	<>
	<div className="cardContainer">
	<MDBCard style={{
		 width: '16rem', }} className="deliveryItems">
		<MDBCardBody>
			<MDBCardTitle>Order <strong>{deliveries.trackNum}</strong></MDBCardTitle>
		</MDBCardBody>
		<h5 className="listItemSubTitle">Attention: <strong>New Delivery</strong></h5>
		<MDBListGroup flush>
			<MDBListGroupItem><FontAwesomeIcon className="listIcon arrowIcon" icon={faLocationArrow} size="2x"/><strong>{deliveries.city}, WA {deliveries.zip}</strong></MDBListGroupItem>
			<MDBListGroupItem><FontAwesomeIcon className="listIcon exclamIcon" icon={faExclamation} size="3x"/><strong>{deliveries.priority}</strong></MDBListGroupItem>
			<MDBListGroupItem><FontAwesomeIcon className="listIcon truckIcon" icon={faTruck} size="3x"/><strong>Package {deliveries.status}</strong></MDBListGroupItem>
		</MDBListGroup>
		<MDBCardBody>
		<Link
						className='btn btn-md btn-info custom-listBtn'
						to={{
							pathname: '/details',
							state: { deliveries },
						}}
					>MORE</Link>
			<button className="delete-btn btn btn-md btn-info custom-listBtn" 
				onClick={() => handleDeleteDelivery(deliveries._id)}>
					Delete 
			</button>
		</MDBCardBody>
	</MDBCard>
	</div>
	</>
	);
}

export default DeliveryListItem;