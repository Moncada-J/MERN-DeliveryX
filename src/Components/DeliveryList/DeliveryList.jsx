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
      <h1 className="listItemTitle">Ready? Let's Get To Work!</h1>
      <div  className="deliveryListItem">
         {d}
      </div>
    </>
  );
}