import 'react-native-gesture-handler';

import React, {Component,useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet,TextInput,Image,Dimensions,TouchableOpacity,FlatList,Alert} from 'react-native';

import { NavigationContainer, useFocusEffect} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
let myData=[
  		{cmpyName:'Amman medicals',mobile:'1234'},
  		{cmpyName:'Jaya medicals',mobile:'1234'},
  		{cmpyName:'Ayyappan medicals',mobile:'12345'},
  	];


class Search extends Component{
constructor(props) {
  super(props);

  this.state = {
  	resData:[],
  	dataFlag:'',
  };
}
onKeyEnter(data){
let res=[];
let key=0;
let dataFlag=false;
	for(let i=0; i<myData.length; i++)
	{
  		if(myData[i].mobile==data)
  		{
  			res.push({cmpyName:myData[i].cmpyName,mobile:myData[i].mobile});
  			dataFlag=true;
  		}
 	}
if(dataFlag==false){
	this.setState({
		dataFlag:'Opps!. No data Found!',
	})
}else{
	this.setState({
		resData:res,
		dataFlag:'',
	});
}
}


render(){
const navigation = this.props;

return(
<View>


	<View style={{flexDirection:'row'}}>

		<TextInput style={{
							backgroundColor:'#ccc',
							margin:10,
							padding:5,
							marginRight:0,
							width:'83%'

						}}

		 placeholder='Search...'
		 onChangeText={(text)=>{this.onKeyEnter(text)}} />


	<View style={{
		 			margin:10,
		 			padding:10,
		 			marginLeft:0,
		 			backgroundColor:'#ccc'
		 		}}>

		 <TouchableOpacity>
		 	<Icon name='search' size={20} />
		 </TouchableOpacity>
	</View>
	</View>

	<View>
			<SearchResult data={this.state.resData} />
	</View>
	<Text>{this.state.dataFlag}</Text>
</View>

);
}
}

function CameraScreen({navigation}){

let [camera,setCamera]=useState(false);

useFocusEffect(
	React.useCallback(() => {
      setCamera(true);

      return () => {setCamera(false)}
    }, [])
);

if(camera==true)
{
	return(<Cam navigation={navigation} />);
}

if(camera==false)
{
	return null;
}

}

class Cam extends Component {

constructor(props) {

  super(props);

  this.state = {
  	camVisible:'flex',
  	data:'',
  	detailsVisible:'none',
  	resData:[{cmpyName:'',mobile:''}],
  };
}

onSuccess = (e,state) => {
let dataFlag = false;
let res=[];
let key=0;
	for(let i=0; i<myData.length; i++)
	{
  		if(myData[i].mobile==e.data)
  		{
  			res.push({cmpyName:myData[i].cmpyName,mobile:myData[i].mobile});
  			dataFlag=true;
  		}
 	}
if(dataFlag==false){
	Alert.alert('Warning!','No Data Found!',[
		{
			text:'Scan Again',
			onPress:()=>this.scanner.reactivate()
		},
		{
			text:'Cancel',
			onPress:()=>this.props.navigation.navigate('Search')
		}	

		]	
	);
}else{
	this.setState({
		resData:res,
		camVisible:'none',
		detailsVisible:'flex',
	});
}
};


 scanAgain(){
 	this.setState({
    	camVisible:'flex',
    	data:[],
    	detailsVisible:'none',
    });
    this.scanner.reactivate();
 }
 

render(){

    return (
    <View>
      <View style={{display:this.state.camVisible}}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={elem => {
            this.scanner = elem;
          }}
          cameraStyle={{ height:'100%'}}
        />
       </View>

        <View style={{display:this.state.detailsVisible}} >
        <View style={{borderWidth:1,borderColor:'#ccc',margin:3,borderBottomWidth:0}} >
        	<SearchResult data={this.state.resData} />
        	{/*<FlatList 
        		data={this.state.resData}
        		renderItem={({item,index})=>(<View style={{borderBottomWidth:1,borderBottomColor:'#ccc'}} >
        										<Text style={{padding:5}} >Store : {item.cmpyName},  Mobile : {item.mobile}</Text>
        									</View>)

        									}
        	keyExtractor={(item, index) => index.toString()}
        	numRows={1}
        	/>*/}
        </View>  		

        	<TouchableOpacity onPress={()=>this.scanAgain()} 
        		style={{width:150,backgroundColor:'green',padding:5,alignSelf:'center',marginTop:10}}
        	>
        		<Text style={{color:'white',textAlign:'center'}}>Scan Another</Text>
        		<Icon name='retweet' size={18} style={{position:'absolute',right:5,color:'white',top:5}} />
        	</TouchableOpacity>

        	<TouchableOpacity onPress={()=>this.props.navigation.goBack()} 
        		style={{width:150,backgroundColor:'red',padding:5,alignSelf:'center',marginTop:10}}
        	>
        		<Text style={{color:'white',textAlign:'center'}}>Cancel</Text>
        		<Icon name='window-close' size={18} style={{position:'absolute',right:5,color:'white',top:5}} />
        	</TouchableOpacity>

        </View>
     </View>
    );
  }
}


class SearchResult extends Component{
constructor(props) {
  super(props);

  this.state = {};
}
render(){
	return(
		<FlatList 
        		data={this.props.data}
        		renderItem={({item,index})=>(<View style={{borderBottomWidth:1,borderBottomColor:'#ccc'}} >
        										<Text style={{padding:5}} >Store : {item.cmpyName},  Mobile : {item.mobile}</Text>
        									</View>)

        									}
        	keyExtractor={(item, index) => index.toString()}
        	numRows={1}
        	/>
	)
}
}



const userEmail='admin';
const userPwd='admin';

class Login extends Component{
constructor(props) {
  super(props);

  this.state = {
  	email:'admin',
  	pwd:'admin',
  	loginErr:'',
  };
}
checkUser(){
if(userEmail!=this.state.email || userPwd!= this.state.pwd ){
	this.setState({
		loginErr:'Invalid username and password',
	});
}else{
	this.setState({
		loginErr:'',
	});
this.props.navigation.navigate('Home');
}
}
render(){
const navigation = this.props;
return(
<View style={{flex:1,backgroundColor:'white'}} >
	<Image
        style = {{
              marginTop:'30%',
              width:100,
              height:100,
              alignSelf:'center',
              }}
        source={require('./assets/img/yaa_icon.png')}
     />
	<Text style={{fontSize:30,marginLeft:'10%'}} >Login</Text>
	<View style={{marginTop:0}} >

		<Text style ={{marginLeft:'10%',marginTop:0,color:'red'}} >{this.state.loginErr}</Text>
		<TextInput style = {style.signinIn} placeholder = {'Email...'} value={'admin'}
        onChangeText = {(email)=>{this.setState({ email })}} />

      <TextInput secureTextEntry={true} style = {style.signinIn} placeholder = {'Password...'} 
        onChangeText = {(pwd)=>{this.setState({ pwd })}} value={'admin'} />

       <TouchableOpacity style = {style.signinOpacity}
   			onPress = {()=>{this.checkUser()}}>

        <Text style = {style.signinTxt} >Login</Text>

    </TouchableOpacity>
	</View>
</View>
)
}
}

function AuthenticateScreen(){
return(
	<Stack.Navigator headerMode='none'>
		<Stack.Screen name='Login' component={Login} />
	</Stack.Navigator>
)
}
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
//const Stack = createStackNavigator();


function Home() {
  return (
  		<TopTab.Navigator headerMode='none' >
  			<TopTab.Screen name='Search' component={Search} />
  			<TopTab.Screen name='Scan' component={CameraScreen} />
  		</TopTab.Navigator>
   );
}

export default function App(){
return(
	<NavigationContainer>
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Authenticate' component={AuthenticateScreen} /> 
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
  	</NavigationContainer>
 )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

});

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
