import React, { useState, useEffect} from 'react';
import { Route, Switch, Redirect, useHistory  } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as deliveryAPI from '../../utilities/deliveries-api';
import AuthPage from '../AuthPage/AuthPage';
import DeliveryList from '../../Components/DeliveryList/DeliveryList';
import DeliveryListNotif from '../../Components/DeliveryListNotif/DeliveryListNotif';
import AddDeliveryPage from '../AddDeliveryPage/AddDeliveryPage';
import DeliveryDetailsPage from '../DeliveryDetailsPage/DeliveryDetailsPage';
import EditDeliveryPage from "../EditDeliveryPage/EditDeliveryPage";
import ModalPopOut from '../../Components/ModalPopOut/ModalPopOut';
import NavBar from '../../Components/NavBar/NavBar';
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
        const newDeliveriesArray = deliveries.map(d => {
          return d._id === updatedDelivery._id ? updatedDelivery : d;
         });
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
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/deliveries/new">
              <AddDeliveryPage
                handleAddDelivery={handleAddDelivery}
                user={user}
                setUser={setUser}
              />
            </Route>
            <Route exact path="/deliveries">
              <DeliveryList className="DeliveryList"
                user={user}
                setUser={setUser}
                deliveries={deliveries}
                handleDeleteDelivery={handleDeleteDelivery}
              />
              <DeliveryListNotif className="DeliveryListNotif" 
              user={user}
              setUser={setUser}
              />
            </Route>
            <Route exact path="/details">
              <DeliveryDetailsPage />
            </Route>
            <Route exact path="/edit">
              <EditDeliveryPage handleUpdateDelivery={handleUpdateDelivery} />
              <ModalPopOut handleUpdateDelivery={handleUpdateDelivery}/>
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
