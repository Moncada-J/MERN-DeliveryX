import React, { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
	  const [showLogin, setShowLogin] = useState(true);
	return (
		<main className="AuthPage">
		<div>
        	<h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      	</div>
      	{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
		</main>
	);
}
