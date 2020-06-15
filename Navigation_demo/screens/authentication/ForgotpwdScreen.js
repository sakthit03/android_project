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

export default  class ForgotPwd extends Component{
constructor(props) {
  super(props);

  this.state = {};
}

render(){

  return(
      <View style={{flex:1}}>
        <Text style = {{fontSize:20,textAlign:'center',marginTop:'5%'}} >Forgot Password</Text>

      <TextInput placeholder={'Email...'} style = {style.resetin} />
      
      <TouchableOpacity style={style.resetOpacity}>
        <Text style={style.resetTxt}>Reset</Text>
      </TouchableOpacity>

      </View>

  )
}
}

const style = StyleSheet.create({
  

  resetOpacity: {
    marginLeft:'10%',
    marginTop:'5%',
    width:'80%',  
  },
  resetTxt:{
    padding:10,
    backgroundColor:'green',
    fontSize:15,
    textAlign:'center',
    color:'white',
  },
  resetin : {
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    alignSelf:'center',
    marginTop:'2%',
    borderColor:'#ccc',
    height:40,
    padding:10,
    fontSize:18,
    fontWeight:'bold',

  },
})