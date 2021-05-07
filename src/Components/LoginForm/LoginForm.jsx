import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import '../../pages/AuthPage/AuthPage.css';
import AuthErrorAlert from '../../Components/AuthErrorAlert/AuthErrorAlert';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function LogIn({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			this.setState({ error: <AuthErrorAlert /> });
		}
	}

	return (
	<>
		<div className='logInForm-container'>
			<form autoComplete='off' onSubmit={handleSubmit}>
				<InputGroup size="lg" className="emailInputGroup login">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon
						 className="emailIcon-auth" icon={faAt} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="email@example.com"type="email" name='email' 
					 value={credentials.email} onChange={handleChange} required />
  				</InputGroup>
				<InputGroup size="lg" className="passwordOneInputGroup login">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon
						 className="passwordIcon-auth" icon={faLock} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="Enter a password"type="password" name='password' 
					 value={credentials.password} onChange={handleChange} required />
  				</InputGroup>
				<Button 
				className="login-btn"
				 variant="outline-warning" type='submit'>
						Log In
				</Button>
			</form>
			</div>
			{error}
		</>
	);
}
