

import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
	render(){
		return(

			<View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://www.yaacreations.com' }}  
            />  
        </View>

		)
	}
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})