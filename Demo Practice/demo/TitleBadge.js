import React, {Component} from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TitleBadge extends Component{


render(){
if(this.props.count>0 && this.props.count<10 ){
	return(

		<View style={{marginTop:10}} >
      		<Icon name='cog' size={25} color={this.props.color} />
      		<View style={{position:'absolute',right:-5,top:-5,backgroundColor:'blue',width:15,height:15,borderRadius:10}}>
        		<Text style={{textAlign:'center',margin:1.5,fontSize:10,color:'white'}} >{this.props.count}</Text>
      		</View>
    	</View>)
}else if(this.props.count>9){
	return(

		<View>
      		<Icon name='home' size={25} color={this.props.color} />
      		<View style={{position:'absolute',right:-7,top:-7,backgroundColor:'blue',width:15,height:15,borderRadius:10}}>
        		<Text style={{textAlign:'center',margin:1.5,fontSize:10,color:'white'}} >9+</Text>
      		</View>
    	</View>)
}


else{
	return(

		<View>
      		<Icon name='home' size={25} color={this.props.color} />
    	</View>
)
}

}
}