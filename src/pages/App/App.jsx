import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DeliveryListPage from '../DeliveryListPage/DeliveryListPage';
import AddDeliveryPage from '../AddDeliveryPage/AddDeliveryPage';
import PreviousDeliveriesPage from '../DeliveryListPage/DeliveryListPage';
import * as deliveryAPI from '../../utilities/deliveries-api';
import NavBar from '../../Components/NavBar/NavBar';

import './App.css';

function App() {
	const [user, setUser] = useState(getUser());
	const [deliveries, setDeliveries] = useState([]);

	useEffect(() => {
		async function getDeliveries() {
			const deliveries = await deliveryAPI.getAll();
			setDeliveries(deliveries);
		}
		getDeliveries();
	}, [])

	async function handleAddDelivery (newDeliveryData) {
		const newDelivery = await deliveryAPI.create(newDeliveryData);
		setDeliveries([...deliveries, newDelivery])
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/'>
							<DeliveryListPage 
							deliveries={deliveries}
							/>
						</Route>
						<Route exact path='/add'>
								<AddDeliveryPage handleAddDelivery={handleAddDelivery} />
						</Route>
						<Route path='/deliveries/new'>
							<AddDeliveryPage />
						</Route>
						<Route path='/deliveries'>
							<PreviousDeliveriesPage />
						</Route>
						<Redirect to='/deliveries' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}

export default App;