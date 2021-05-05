import React from 'react';
import DeliveryCard from '../../Components/DeliveryCard/DeliveryCard';
import {Link, useLocation} from 'react-router-dom';
import '../../Components/DeliveryCard/DeliveryCard.css';

function DeliveryDetailsPage(props) {
     const { state: {deliveries} } = useLocation();
    return (
        <>
            <h1 className="detailsPageTitle">About the Delivery</h1>
              <DeliveryCard
                    key={deliveries._id}
                    deliveries={deliveries}
             />
            <Link
					className='btn btn-sm btn-info modifyLink'
					to={{
						pathname: '/edit',
						state: { deliveries },
					}}
			>MODIFY</Link>

        <Link 
                className='btn btn-sm btn-info modifyLink'
                to={{ 
                    pathname: '/',
                    state: { deliveries },
                }} 
         >RETURN</Link>
        </>
    );
}

export default DeliveryDetailsPage;