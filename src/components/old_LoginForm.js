import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
	state = { text: '' }; // start off text as an empty string


	render() {
		return (
			<Card>
				<CardSection>
					<TextInput 
						value={this.state.text}
						onChangeText={text => this.setState({ text: text })}
						style={{ height: 20, width: 100 }} 
					/>
				</CardSection>

				<CardSection />

				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
