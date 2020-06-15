import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CounterComponent from './CounterComponent';

const Tab = createBottomTabNavigator();



export default class RootApp extends Component {
constructor(props) {
  super(props);

  this.state = {};
}

render(){
	return(
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={CounterComponent} counter={0} />
			</Tab.Navigator>
		</NavigationContainer>
		
	)
}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
	},

	welcome:{
		fontSize:10,
		textAlign:'center',
		margin:10,
	},

	instructions: {
		textAlign:'center',
		color: '#333333',
		marginBottom:5,
	},
});