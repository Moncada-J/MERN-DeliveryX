import './DeliveryList.css';
import DeliveryListItem from '../DeliveryListItem/DeliveryListItem';
import NavBar from '../../Components/NavBar/NavBar';

export default function DeliveryList ({ deliveries, handleDeleteDelivery, user, setUser}) {
    const d = deliveries.map(delivery => 
        <DeliveryListItem
        key={delivery._id}
        deliveries={delivery}
        handleDeleteDelivery={handleDeleteDelivery}
        />

        );
        return (
      <>
      <NavBar user={user} setUser={setUser} />
      <div  className="deliveryListItem">
         {d}
      </div>
    </>
  );
}