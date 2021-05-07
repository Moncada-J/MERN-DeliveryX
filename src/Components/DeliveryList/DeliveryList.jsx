import React from 'react';
import DeliveryListItem from '../DeliveryListItem/DeliveryListItem';
import './DeliveryList.css';

export default function DeliveryList ({ deliveries, handleDeleteDelivery }) {
    const d = deliveries.map(delivery => 
        <DeliveryListItem
        key={delivery._id}
        deliveries={delivery}
        handleDeleteDelivery={handleDeleteDelivery}
        />
        );
        return (
      <>
      <div  className="deliveryListItem">
         {d}
      </div>
    </>
  );
}