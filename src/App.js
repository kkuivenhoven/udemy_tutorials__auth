import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm  from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
			firebase.initializeApp({
			apiKey: 'AIzaSyAi-MSbgpmild8ZvwCHdo3DoWWoryZGv2g',
			authDomain: 'auth-c1f9d.firebaseapp.com',
			databaseURL: 'https://auth-c1f9d.firebaseio.com',
			projectId: 'auth-c1f9d',
			storageBucket: 'auth-c1f9d.appspot.com',
			messagingSenderId: '384908687528'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({ loggedIn: true });
			}
			else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn){
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}


export default App;
