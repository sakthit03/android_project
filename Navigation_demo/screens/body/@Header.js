
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


export default class Header extends Component{
constructor(props) {
  super(props);

  this.state = {
    

    }
    
  }
  render(){

return(

      <View style={style.header}>
      
        <StatusBar
          backgroundColor='darkgreen'
          barStyle='white-content' />

        <TouchableOpacity
            style={style.barOp}
            onPress={()=>{this.props.onClick()}}>

          <Icon style={style.barTxt} name='bars'  />

        </TouchableOpacity>
      
          <Text style={style.cmpnyName} >Yaa Grocery</Text>

          <Icon style={style.search}  name='search' />

        </View>

)
}

}
const style=StyleSheet.create({
  header:{
    backgroundColor:'darkgreen',
    height:'9%'
  },

  barOp:{
    width:'6%',
    height:'3%',
    marginLeft:'2%',
    marginTop:'5%',
    position:'absolute',
  },

  barTxt:{
    fontSize:30,
    color:'white',
  },

  cmpnyName:{
    marginLeft:'13%',
    fontSize:20,
    color:'white',
    marginTop:'5.5%',
  },

  search:{
    marginLeft:'90%',
    width:'10%',
    marginRight:'3%',
    marginTop:'-7%',
    fontSize:20,
    color:'white',
  },

  imgSlideContent:{
    width:'100%',
    height:'40%',
    borderBottomColor:'black',
    borderBottomWidth:1,
    backgroundColor:'white',
  },
  
  productsList:{
    height:'auto',
    backgroundColor:'yellow',
  }

})