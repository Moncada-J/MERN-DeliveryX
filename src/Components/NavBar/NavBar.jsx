import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/deliveries'>Order History</Link>
			&nbsp; | &nbsp;
			<Link to='/deliveries/new'>New Order</Link>
			&nbsp; | &nbsp;
			<span>You have deliveries waiting, <strong>{user.name}</strong>!</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}
