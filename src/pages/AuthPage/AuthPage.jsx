import React, { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './AuthPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage({ setUser }) {
	  const [showLogin, setShowLogin] = useState(true);
	return (
	<main className="authPage">
		<div className="authContainer">
			<h1 className="authTitles">
			{showLogin ? "Welcome Back, Stranger!" : "Welcome to DeliveryX!"}
			</h1>
			<h2 className="appTitleAuth">
			<FontAwesomeIcon className="appIconAuth" icon={faCube} size="3x"/>
				DeliveryX</h2>
			<p className="authDesc">
			{showLogin ? "Sign into your account. " : "Join today and start your deliveries!"
			 }
			</p>

      		{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        	<span className="authRedirectText" onClick={() => setShowLogin(!showLogin)}>
				<br/>
				{showLogin ? "Don't have an account? Register here." : "Are you an existing user? Login here."}
			</span>
		</div>
	</main>
);
}
