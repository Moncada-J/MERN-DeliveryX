// import './DeliveryList.css';
import DeliveryListItem from '../DeliveryListItem/DeliveryListItem';

export default function DeliveryList ({ deliveries }) {
    const d = deliveries.map(delivery => 
        <DeliveryListItem 
        key={delivery._id}
        deliveries={delivery}
        />
        );
  return (
    <>
      <h1>Ready for Delivery</h1>
      <div>
         {d}
      </div>
    </>
  );
}