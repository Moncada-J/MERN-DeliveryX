import React, { useState, useEffect} from 'react';
import * as deliveryAPI from '../../utilities/deliveries-api';
import { Redirect, Route, Switch, useHistory  } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DeliveryList from '../../Components/DeliveryList/DeliveryList';
import AddDeliveryPage from '../AddDeliveryPage/AddDeliveryPage';
import DeliveryDetailsPage from '../DeliveryDetailsPage/DeliveryDetailsPage';
import EditDeliveryPage from "../EditDeliveryPage/EditDeliveryPage";
import './App.css';

export default function App(props) {
	const [user, setUser] = useState(getUser());
	const [deliveries, setDeliveries] = useState([]);

	
	const history = useHistory();

		useEffect(() => {
				history.push('/');
			}, [deliveries, history]);

		useEffect(() => {
			async function getDeliveries() {
				const deliveries = await deliveryAPI.getAll();
				setDeliveries(deliveries);
			}
			getDeliveries();
		}, []);

		async function handleAddDelivery(newDelData) {
				const newDelivery = await deliveryAPI.create(newDelData);
				setDeliveries([...deliveries, newDelivery]);
			}

		async function handleUpdateDelivery(updatedDelData) {
			const updatedDelivery = await deliveryAPI.update(updatedDelData);
			const newDeliveriesArray = deliveries.map(d => d._id === updatedDelivery._id ? updatedDelivery : d );
			setDeliveries(newDeliveriesArray);
		}

		async function handleDeleteDelivery(id) {
			await deliveryAPI.deleteOne(id);
			setDeliveries(deliveries.filter( d => d._id !== id))
		}

	return (
    <main className="App">
      {user ? (
        <>
          <Switch>
            <Route exact path="/deliveries/new">
              <AddDeliveryPage handleAddDelivery={handleAddDelivery} />
            </Route>
            <Route exact path="/deliveries">
              <DeliveryList
                user={user}
                setUser={setUser}
                deliveries={deliveries}
                />
				  
            </Route>
            <Route exact path="/details">
              <DeliveryDetailsPage />
            </Route>
            <Route exact path="/edit">
              <EditDeliveryPage handleUpdateDelivery={handleUpdateDelivery} />
            </Route>
            <Redirect to="/deliveries" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
