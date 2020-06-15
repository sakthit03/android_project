import React, {Component} from 'react';
import { View, Text, Button, StyleSheet,TextInput,Image} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {StaticCounterContainer} from './demo/Screens/StaticCounter';
import {CounterContainer} from './demo/Screens/Counter';
import {store} from './demo/store';

import TitleBadge from './demo/TitleBadge';

// Create our stack navigator
let Tab = createBottomTabNavigator();

class BadgeIcon extends Component{
constructor(props) {
  super(props);

  this.state = {};
}

render(){ 
const {user}=this.props;
  return(
    <TitleBadge count={user[0].count} color={this.props.color} />
  )
}
}
let Icon = connect(state => ({ user: state.user }))(BadgeIcon);
// Render the app container component with the provider around it
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
                        activeTintColor:'tomato', 
                        inactiveTintColor:'black',

                        style:{
                          height:45,
                          backgroundColor:'lightblue',
                        }
                      }}>

          <Tab.Screen name="Home" component={CounterContainer} />
          <Tab.Screen
            name="Settings"
            component={StaticCounterContainer}
            options={{
              tabBarIcon:({ color }) => (
                <Icon color={color} />
              ),
              

            }}
           
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
