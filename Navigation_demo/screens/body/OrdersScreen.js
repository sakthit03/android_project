import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './@Header';

export default class OrdersScreen extends Component{
constructor(props) {
  super(props);

  this.state = {};
}
check(){
  alert('ss');
}
render(){

  return(
    
    <View style={{flex:1}} >
      <Header onClick={this.props.navigation.openDrawer} />
    </View>
    
    
  );
}

}
