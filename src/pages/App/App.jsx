import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddDeliveryPage from '../AddDeliveryPage/AddDeliveryPage';
import PreviousDeliveriesPage from '../PreviousDeliveriesPage/PreviousDeliveriesPage';
import NavBar from '../../Components/NavBar/NavBar';

import './App.css';


export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
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
