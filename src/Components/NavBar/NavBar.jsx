import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';



export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}


	return (
		<>
		 <Navbar>
			 <h2 className="navTitle">DELIVERYX</h2>
            <Link className="navLink" to="/deliveries/new">New Delivery</Link>
            <Navbar.Toggle />
				&nbsp; | &nbsp;&nbsp;
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="navText">
               	<FontAwesomeIcon className="userIcon" icon={faUserCircle} size="3x"/><Link to="#login">{user.name}</Link>
              </Navbar.Text>
			  	&nbsp; | &nbsp;&nbsp;
			  <Navbar.Text className="navText">
                <Link to='' onClick={handleLogOut}>Sign Out</Link>
              </Navbar.Text>
            </Navbar.Collapse>
      	</Navbar>
	</>
	);
}
