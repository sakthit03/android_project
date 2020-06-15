import React, {Component} from 'react';
import { View, Text, Button, StyleSheet,TextInput,Image } from 'react-native';
import {test} from './../Actions/Actions';
import { connect } from 'react-redux';

class Counter extends Component{
constructor(props) {
  super(props);

  this.state = {
    name:'',
  };
}

delete(dispatch){
  dispatch({ type: 'DELETE'});
  this.setState({
    name:'',
    age:'',
    mobile:'',
    count:'',
  });
}

sendUser(dispatch){
  dispatch({
    type:'NAME',
    payload:{
      user:[{
              name:this.state.name,
              age:this.state.age,
              mobile:this.state.mobile,
              count:this.state.count,
           }]
    }
  });
}

test(dispatch){
  dispatch({
    type:'ADD_BADGE',
    payload:{test:8},
  })
}

render(){ 
 const { user, dispatch, navigation,test} =this.props;

  return (
    <View style={styles.container}>
    <Text>Test = {test}</Text>
    
      <Text style={styles.paragraph}>Name : {user[0].name}</Text>

      <Text style={styles.paragraph}>Age : {user[0].age}</Text>

      <Text style={styles.paragraph}>Mobile : {user[0].mobile}</Text>

      <TextInput placeholder='Name...' style={{borderWidth:1,borderColor:'#ccc',width:'100%',margin:5}} value={this.state.name} onChangeText={(name)=>{this.setState({ name })}} />

      <TextInput placeholder='Age...' style={{borderWidth:1,borderColor:'#ccc',width:'100%',margin:5}} value={this.state.age} onChangeText={(age)=>{this.setState({ age })}} />

      <TextInput placeholder='Mobile...' style={{borderWidth:1,borderColor:'#ccc',width:'100%',margin:5}} value={this.state.mobile} onChangeText={(mobile)=>{this.setState({ mobile })}} />

      <TextInput placeholder='Count...' style={{borderWidth:1,borderColor:'#ccc',width:'100%',margin:5}} value={this.state.count} onChangeText={(count)=>{this.setState({ count })}} />

      <Button
        title="submit"
        onPress={() =>{this.sendUser(dispatch)}}
      />

      <Button
        title="Delete"
        onPress={() =>{this.delete(dispatch); } }
      />


      <Button
        title="Test"
        onPress={() =>{this.test(dispatch); }}
      />

      
    </View>
  );
}
}

export let CounterContainer = connect(state => ({ user: state.user, test: state.test }))(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
