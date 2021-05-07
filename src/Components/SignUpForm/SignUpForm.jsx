import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import AuthErrorAlert from '../../Components/AuthErrorAlert/AuthErrorAlert';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm: '',
			error: '',
		};
	}

	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [confirm, setConfirm] = useState('')
	// const [error, setError] = useState('')
	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
			error: '',
		});
	};

	handleSubmit = async evt => {
		evt.preventDefault();
		try {
			const formData = { ...this.state };
			delete formData.error;
			delete formData.confirm;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the payload of the
			// JSON Web Token (JWT)
			const user = await signUp(formData);
			this.props.setUser(user);
		} catch {
			// An error occurred
			this.setState({ error: <AuthErrorAlert /> });
		}
	};

	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<>
			<form autoComplete='off' onSubmit={this.handleSubmit}>
				<InputGroup size="lg" className="nameInputGroup">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon 
						className="userIcon-auth" icon={faUser} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="John Smith" type="name" name='name' value={this.state.name} 
					onChange={this.handleChange} required />
  				</InputGroup>
				<InputGroup size="lg" className="emailInputGroup">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon
						 className="emailIcon-auth" icon={faAt} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="email@example.com"type="email" name='email' value={this.state.email} 
					onChange={this.handleChange} required />
  				</InputGroup>
				<InputGroup size="lg" className="passwordOneInputGroup">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon
						 className="passwordIcon-auth" icon={faLock} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="Enter a password"type="password" name='password' 
					 value={this.state.password} onChange={this.handleChange} required />
  				</InputGroup>
				<InputGroup size="lg" className="passwordTwoInputGroup">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon
						 className="passwordIcon-auth" icon={faExclamationTriangle} size="1x"/></InputGroup.Text>
					</InputGroup.Prepend>
    				<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
					 placeholder="Confirm password" type="password" name='confirm'
					 value={this.state.confirm} onChange={this.handleChange}	required />
  				</InputGroup>
				<Button 
				 variant="outline-warning" type='submit' disabled={disable}>
						REGISTER
				</Button>
			</form>
				{this.state.error}
		</>
		);
	}
}
