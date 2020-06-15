import 'react-native-gesture-handler';

import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MyAccScreen from './../body/MyAccScreen';
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
import { StackActions,NavigationActions } from '@react-navigation/native';

export default class LoginScreen extends Component {
constructor(props) {
  super(props);

  this.checkUser = this.checkUser.bind(this);

  this.state = {
    email:'s@gmail.com',
    pwd:'12',
    loginErr:'',
  };
}
async checkUser(){
const {navigation} = this.props;

let email = this.state.email;
let pwd = this.state.pwd;

if( email.length == 0 || pwd.length == 0 ){

  this.setState({loginErr:'Please enter the user name and pawword!'});
  return 0;

}else{

  let userjson = await AsyncStorage.getItem('user');
  let user = JSON.parse(userjson);

  if(user.email != email || user.pwd != pwd )
  {

    this.setState({loginErr:'Invalid email and password.'});
    return 0;

  }else{

    await AsyncStorage.setItem('userName',user.F_name+' '+user.L_name);
    await AsyncStorage.setItem('loginStatus','true');

    navigation.navigate('Root',{
      name:'sakthivel',
    });
}
}
}

render(){
const {navigation} = this.props;
  return(
    <View style={{flex:1,backgroundColor:'white'}} >
      <Image
        style = {{
              marginTop:10,
              width:100,
              height:100,
              alignSelf:'center',
              }}
        source={require('./../../assets/img/yaa_icon.png')}
        />
      <Text style ={{textAlign:'center',fontSize:30,marginTop:10,}} >Login</Text>

      <Text style ={{marginLeft:'10%',marginTop:5,color:'red'}} >{this.state.loginErr}</Text>
      

      <TextInput style = {style.signinIn} placeholder = {'Email...'}
        onChangeText = {(email)=>{this.setState({ email })}} />

      <TextInput secureTextEntry={true} style = {style.signinIn} placeholder = {'Password...'} 
        onChangeText = {(pwd)=>{this.setState({ pwd })}} />

      <TouchableOpacity style = {style.forgot}
        onPress = {()=>{navigation.navigate('ForgotpwdScreen')}}
        >
        
        <Text style = {style.btnForgot} >Forgot password?</Text>

      </TouchableOpacity>


    <TouchableOpacity style = {style.signinOpacity}
    onPress = {()=>{this.checkUser()}}>

        <Text style = {style.signinTxt} >SignIn</Text>

    </TouchableOpacity>
    
    <TouchableOpacity style = {style.signup}
      onPress = {()=>{navigation.navigate('RegisterScreen')}} >

      <Text style = {style.btnReg} >New user? Register Here...</Text>
    </TouchableOpacity>

    </View>
  )
}
}
const style = StyleSheet.create({
  btnReg:{
    textAlign:'center',
    color:'blue',
  },
  btnForgot:{
    textAlign:'left',
    color:'blue',
  },
  signinIn: {
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    alignSelf:'center',
    marginTop:'2%',
    height:40,
    padding:10,
    borderColor:'#ccc',
    fontSize:18,
    fontWeight:'bold',
  },
  signinOpacity:{
    marginTop:10,
    marginLeft:'10%',
    backgroundColor:'blue',
    width:'80%',
    marginBottom:10,
  },
  signinTxt:{
    fontSize:15,
    color:'white',
    textAlign:'center',
    margin:10,
  },
  forgot:{
    marginTop:'2%',
    marginLeft:'10%',
  }
})