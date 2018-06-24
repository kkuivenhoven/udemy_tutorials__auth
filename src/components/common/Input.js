import React from 'react';
import { TextInput, View, Text } from 'react-native';

// functional component
// want to pass in label text as prop to this component
// so can receive a prop from our props object
// WE WILL RECEIVE value AND onChangeText FROM OUR PARENT
// and so we will PASS THAT IN AS AN ARGUMENT TO Input
// so that we can access the text that is there initially
// and the text that is set by setState() upon user input
// ;;;; just passing value and onChangeText text values
// directly into the TextInput tag
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};


// 3 = 2 + 1 for flex
//	so 2/3rds of space are allocated for inputStyle
// and 1/3 is allocated for labelStyle
const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
};


// this is a file that we will immediately
// import and export (kinda like the index.js file that
// lives in this folder), going to wrap input with {}
// and we won't use the default keyword
export { Input };
