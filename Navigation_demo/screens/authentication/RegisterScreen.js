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
import AsyncStorage from '@react-native-community/async-storage';

export default class RegisterScreen extends Component{
constructor(props) {
  super(props);

this.onClickSignUp = this.onClickSignUp.bind(this);


  this.state = {
    FName  : '',
    LName  : '',
    email  : '',
    mobile : '',
    pwd    : '',
    cpwd   : '',
    regErr : '',
  };
}
//----------------------------------------------------------------------------------------------
// for register and store in async storage

async onClickSignUp() {
const {navigation} = this.props;


let F_name = this.state.FName;
let L_name = this.state.LName;
let mobile = this.state.mobile;
let email = this.state.email.toLowerCase();
let pwd = this.state.pwd;
let cpwd = this.state.cpwd;

if( F_name.length == 0 || L_name.length == 0  || email.length == 0 || mobile.length == 0 || pwd.length == 0 || cpwd.length == 0)
{
  this.setState({regErr:'Please fill the all input fields.'});
  return 0;
}else{
  //email validate --------------------------------------------->
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm; //regular expression for email validate-->
  if(!re.test(email))
  {
    this.setState({regErr:'Please enter a valid email!.'});
    return 0;
  }
  //password matching   ----------------------------------->
  if(pwd != cpwd)
  {
    this.setState({loginErr:'Password does not mathced'});
    return 0;
  }
  else{
    let userObj = {
      F_name:F_name,
      L_name:L_name,
      email:email,
      mobile:mobile,
      pwd:pwd,

    }
    let userjson = JSON.stringify(userObj);
  
    await AsyncStorage.setItem('user',userjson);
    let userst = await AsyncStorage.getItem('user');
    this.setState({regErr:'Registration Success'});
  }
  
}
}

resetInputs(){
  this.setState({
    FName  : '',
      LName  : '',
      email  : '',
      mobile : '',
      pwd    : '',
      cpwd   : '',
      regErr : '',
  })
}
//---------------------------------------------------------------------------------------------

render(){
  const {navigation} = this.props;
return(
  <View style = {{flex:1}} >
    <Text style ={{textAlign:'center',margin:'3%',fontSize:30}}>Register</Text>

    <Text style = {{marginLeft:'10%',color:'red' ,}} >{this.state.regErr}</Text>

    <TextInput placeholder = {'First Name...'} style = {style.signUpIn}
      onChangeText = { (FName)=>{this.setState({ FName })} } value = {this.state.FName} />

    <TextInput placeholder = {'Last Name...'} style = {style.signUpIn}
      onChangeText = { (LName)=>{this.setState({ LName })} } value = {this.state.LName} />

    <TextInput placeholder = {'Email...'} style = {style.signUpIn}
      onChangeText = { (email)=>{this.setState({ email })} } value = {this.state.email} />

    <TextInput placeholder = {'Mobile...'} style = {style.signUpIn}
      onChangeText = { (mobile)=>{this.setState({ mobile })} } value = {this.state.mobile} />

    <TextInput  secureTextEntry={true} placeholder = {'Password...'} style = {style.signUpIn}
      onChangeText = { (pwd)=>{this.setState({ pwd })} } value = {this.state.pwd} />

    <TextInput  secureTextEntry={true} placeholder = {'Confirm Password...'} style = {style.signUpIn} 
      onChangeText = { (cpwd)=>{this.setState({ cpwd })} } value = {this.state.cpwd} />

    <TouchableOpacity
      onPress = {this.onClickSignUp}
      style = {style.regOpacity}
    >
      <Text style = {style.regTxt}>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {style.resetOpacity}
      onPress = {()=>{this.resetInputs()}} >
      <Text style = {style.resetTxt}>Reset</Text> 
    </TouchableOpacity>

    <TouchableOpacity style = {style.signRegOpacity}
      onPress = {()=>navigation.goBack()} >
      <Text style = {style.signRegTxt}>SignIn</Text>  
    </TouchableOpacity>


  </View>
)
}
}

const style = StyleSheet.create({
  resetOpacity: {
    width:'30%',
    textAlign:'center',
    marginTop:'-10%',
    marginLeft:'60%',
    backgroundColor:'red',
    padding:10,
  },
  resetTxt: {
    fontSize:15,
    textAlign:'center',
    color:'white',
  },
  signRegOpacity: {
    marginLeft:'10%',
    marginTop:'5%',
    width:'80%',  
  },
  signRegTxt:{
    padding:10,
    backgroundColor:'green',
    fontSize:15,
    textAlign:'center',
    color:'white',
  },
  regTxt: {
    fontSize:15,
    textAlign:'center',
    color:'white',
  },
  signUpIn : {
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
  regOpacity: {
    width:'30%',
    textAlign:'center',
    marginTop:'5%',
    marginLeft:'10%',
    backgroundColor:'blue',
    padding:10,
  },

  btnReg:{
    textAlign:'center',
    color:'blue',
  },
  btnForgot:{
    textAlign:'left',
    color:'blue',
  },
  forgot:{
    marginTop:'2%',
    marginLeft:'10%',
  }

})