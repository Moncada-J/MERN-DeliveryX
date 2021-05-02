import React from 'react';
import DeliveryCard from '../../Components/DeliveryCard/DeliveryCard';
import {useLocation} from 'react-router-dom';

function DeliveryDetailsPage(props) {
     const { state: {deliveries} } = useLocation();
    return (
        <>
            <h1>About the Delivery</h1>
              <DeliveryCard
                    key={deliveries._id}
                    deliveries={deliveries}
             />
        </>
    );
}

export default DeliveryDetailsPage;