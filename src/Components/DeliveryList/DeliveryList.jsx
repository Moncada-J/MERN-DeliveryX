import './DeliveryList.css';
import DeliveryListItem from '../DeliveryListItem/DeliveryListItem';


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