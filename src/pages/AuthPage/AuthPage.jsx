import React from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
	return (
		<main>
			<h1>Welcome to DeliveryX!</h1>
			<SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</main>
	);
}
