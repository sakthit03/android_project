import React, {Component,useEffect,useState} from 'react';
import OrdersScreen from './OrdersScreen';
import {View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    StatusBar,
    TouchableWithoutFeedback,

      } from 'react-native';
import {
  NavigationContainer,
  useFocusEffect,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';



export default class MyAccScreen extends Component{
constructor(props) {
  super(props);
  this.state = {
    name:'',
  };

}
async logout(){
  await AsyncStorage.removeItem('userName');
  await AsyncStorage.removeItem('loginStatus');
  alert('logout success');
  this.props.navigation.navigate('Root');
}

render(){

return (
  <View>
      
        

        <Button title='Login'
        onPress={()=>{this.props.navigation.navigate('Authenticate')}} />
      
      <Button title='Logout'
        onPress={()=>{this.logout()}} />

    </View>
  );
}
}
