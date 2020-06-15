//importing authentication screens
import LoginScreen from './screens/authentication/LoginScreen';
import RegisterScreen from './screens/authentication/RegisterScreen';
import ForgotpwdScreen from './screens/authentication/ForgotpwdScreen';

//importing body screens
import HomeScreen from './screens/body/HomeScreen';
import ShopScreen from './screens/body/ShopScreen';
import OrdersScreen from './screens/body/OrdersScreen';
import MyAccScreen from './screens/body/MyAccScreen';

//importing components
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
import { NavigationContainer,DrawerActions,NavigationEvents } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

import CustomDrawerContent from './screens/drawer/CustomDrawerContent';
// navigation screen here------------------------------>

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();





function Root() {
  return (

    <Drawer.Navigator drawerStyle={{width:'70%',height:'100%'}}
        initialRouteName='RootTab' drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='RootTab' component={RootTab} header={false}/>
      {/*<Drawer.Screen name='RootLogin' component={RootLogin} header={false}/>*/}
    </Drawer.Navigator>
    
  );
}

function RootTab(){
return(
  <Tab.Navigator
    
    tabBarOptions={{
      activeTintColor:'green', 
      inactiveTintColor:'black',
      style:{
        backgroundColor:'#ccc',
      }
    }}
    >
    

    <Tab.Screen name='Home' component={HomeScreen}
    options={{
      tabBarIcon:({color})=>(<Icon name='home' color={color} size={24} />),
    }} />
    

    <Tab.Screen name='Shop' component={ShopScreen}
    options={{
      tabBarIcon:({color})=>(<Icon name='shopping-cart' color={color} size={24} />),
    }} />
    

    <Tab.Screen name='Carts' component={OrdersScreen}
    options={{
      tabBarIcon:({color})=>(<Icon name='shopping-bag' color={color} size={22} />),
    }} />

    <Tab.Screen name='MyAcc' component={MyAccScreen}
    options={{
      tabBarIcon:({color})=>(<Icon name='user' color={color} size={22} />),
    }} />
      
  </Tab.Navigator>
)
}
const plusMenuS =  StyleSheet.create({
  btnView:{
    position:'absolute',
    top:-15,
    justifyContent:'center',
    alignItems:'center',

  },
  btnText:{
    
    color:'white',
    fontSize:40,
  }
})

function Authenticate(){
return(
  <Stack.Navigator headerMode='none' initialRouteName='Root' >

      <Stack.Screen name='LoginScreen' component = {LoginScreen}/>
      <Stack.Screen name='RegisterScreen' component = {RegisterScreen} />
      <Stack.Screen name='ForgotpwdScreen' component = {ForgotpwdScreen} />

  </Stack.Navigator>
)
}

export default function App(){
return(
  <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName='Root' >
      <Stack.Screen name='Authenticate' component = {Authenticate}
        
         />
      
      <Stack.Screen name='Root' component={Root} />
    </Stack.Navigator>
  </NavigationContainer>
)
}


function IconWithBadge({ name, profileBadge, color, size }) {
  return (
    <View style={{ width: 20, height: 20, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      {profileBadge > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            paddingRight:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {profileBadge}
          </Text>
        </View>
      )}
      {profileBadge > 9 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 8,
            width: 14,
            height: 14,
            padding:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {'9+'}
          </Text>
        </View>
      )}
    </View>
  );
}