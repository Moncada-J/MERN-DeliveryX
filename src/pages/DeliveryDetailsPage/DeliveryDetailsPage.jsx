import React from 'react';
import DeliveryCard from '../../Components/DeliveryCard/DeliveryCard';
import {Link, useLocation} from 'react-router-dom';

function DeliveryDetailsPage(props) {
     const { state: {deliveries} } = useLocation();
    return (
        <>
            <h1>About the Delivery</h1>
              <DeliveryCard
                    key={deliveries._id}
                    deliveries={deliveries}
             />
            <Link
					className='btn btn-sm btn-info editLink'
					to={{
						pathname: '/edit',
						state: { deliveries },
					}}
			>MODIFY</Link>
        </>
    );
}

export default DeliveryDetailsPage;