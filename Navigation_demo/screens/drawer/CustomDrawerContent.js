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
    ScrollView,

      } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CustomDrawerContent extends Component {
constructor(props) {
  super(props);
  this.state = {
    loginStatus:false,
    userName:null,
  };
}
async checkuser()
{
  this.setState({
    loginStatus: await AsyncStorage.getItem('loginStatus'),
    userName: await AsyncStorage.getItem('userName'),
  })
}

render(){
this.checkuser();
const props=this.props;
  return (
    <DrawerContentScrollView {...props} >

    <View> 

      <View style={userInfo.iconView}>

        <Icon name='user' style={userInfo.iconImg} />

      </View>

      <View style={{marginTop:5}}>
        {this.state.loginStatus?(<Text style={{
          fontSize:18,
          textAlign:'center',}} >
        {this.state.userName}</Text>):
          (
            <TouchableOpacity
              onPress={()=>{props.navigation.navigate('RootLogin');}}

             style={userInfo.loginbtnOp}>

              <Text style= {userInfo.loginbtnTxt} >Login</Text>
            </TouchableOpacity> 
            )}
      </View>


<View style={{
              marginTop:20,
              width:'80%',
              borderBottomWidth:0.5,
              borderBottomColor:'grey',
              alignSelf:'center'


            }} >
</View>
  


  {/*Scroll View for drawer screens*/} 
      
      <ScrollView>

      <TouchableOpacity style={routes.opacity} >
        <Text style= {routes.text} >
          <Icon style={routes.icon}  name='user-plus' />  My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={routes.opacity} >      
        <Text style= {routes.text} >
          <Icon style={routes.icon}  name='map-marker' />   My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={routes.opacity} >
        <Text style= {routes.text} >
          <Icon style={routes.icon}  name='sign-out' />  Logout</Text>
      </TouchableOpacity>

<View style={{
              marginTop:5,
              width:'80%',
              borderBottomWidth:0.5,
              borderBottomColor:'grey',
              alignSelf:'center'


            }} >
</View>

      <TouchableOpacity style={footer.opacity} >
        <Text style= {footer.text} >Terms & Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={footer.opacity} >
        <Text style= {footer.text} >Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={footer.opacity} >
        <Text style= {footer.text} >Return Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={footer.opacity} >
        <Text style= {footer.text} >Contact Us</Text>
      </TouchableOpacity>




      </ScrollView>

    </View>
    <View style={{

    }} >
      <Text
      style={{
                textAlign:'center',
                marginTop:'55%',

             }}
            >@Yaa Grocery v0.0.1</Text>
    </View>
    </DrawerContentScrollView>
  );
}
}



const userInfo=StyleSheet.create({
  iconView:{
            width:60,
            height:60,
            alignSelf:'center',
            marginTop:'10%',
          },

  iconImg:{
            color:'white',
            backgroundColor:'lightblue',
            fontSize:50,
            padding:3,
            textAlign:'center',
            borderRadius:30,
          },

  loginbtnOp:{
            backgroundColor:'#7658d1',
            width:'40%',
            borderRadius:3,
            alignSelf:'center',
          },

  loginbtnTxt:{
            fontSize:18,
            color:'white',
            padding:5,
            textAlign:"center",
          },


})

const routes = StyleSheet.create({
  opacity:{
    marginTop:'7%',
    marginBottom:'7%',
    marginLeft:30,
  },

  text:{
    marginLeft:10,
    fontSize:18,

  },

  icon:{
    fontSize:20,
  },

  logoutIcon:{
    transform: [{ rotate: '90deg' }]
  }
})

const footer=StyleSheet.create({
  opacity:{
    height:'4%',
    marginLeft:'7%',
    margin:15,
  },

  text:{
    fontSize:15,
  }
})