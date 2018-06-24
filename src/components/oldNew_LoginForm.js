import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

// passing value and onChangeText as a prop/value to our Input.js
// in this.setState for email section, originally had
// { text: text } which then changed to { email: email }
//  and then relying on ES6, we can change that to just
//	{ email }
// could leave secureTextEntry out of Input for email
// which would pass NULL to child which basically is false
class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	}; // start off text as an empty string

	onButtonPress(){
		const { email, password } = this.state; // structures out email
		// and password from state so don't have to do this.state.email
		// and this.state.password (less text to look at for the dev)

		this.setState({ error: '', loading: true }); // clears error message
		// in the case that "auth failed" is set
		// loading: true means re-render the button but with the spinner instead!

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this)) //passing off to 
			// a promise, a promise that'll be invoked at some point in the future
			// & we don't know the context that it will be called with,
			// we have to bind() the context to THIS (this) like so
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(() => {
						this.setState({ error: 'Authentication Failed.' });	
					});
			});
	}

	
	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}


	onLoginSuccess(){
		this.setState({ 
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}
	

	renderButton() {
		if(this.state.loading) { // if loading is true
			return <Spinner size="small" />;
		}
		return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Log in
				</Button>
		);
	}
	
	

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						secureTextEntry={false}
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry={true}
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
