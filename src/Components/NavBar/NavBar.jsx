import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
		<>
		<Navbar className="navbar">
				<Navbar.Brand className="navTitle"><FontAwesomeIcon className="appIcon" icon={faCube} size="3x"/>DeliveryX</Navbar.Brand>
		  			&nbsp; | &nbsp;&nbsp;
				<Nav className="mr-auto">
					<Nav.Link><Link className="navLink" to="/deliveries">Active Deliveries</Link></Nav.Link>
					<Nav.Link><Link className="navLink" to="/deliveries/new">New Delivery</Link></Nav.Link>
				</Nav>
    			<Form inline>
					<Navbar.Brand className="navUserText"><FontAwesomeIcon className="userIcon" icon={faUserCircle} size="3x"/>Hello, {user.name}</Navbar.Brand>
					<Button className="navLogOutBtn"variant="outline-info">
					 <Link className="navLink" to='' onClick={handleLogOut}>Log Out</Link>
					</Button>
				</Form>
  			</Navbar>
		</>
	);
}
