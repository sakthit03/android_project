import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
//import all the basic components we are going to use.
import { CameraKitCameraScreen } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.
import Icon from 'react-native-vector-icons';

class StaticCounter extends Component {
constructor(props) {
  super(props);

  this.state = {};
}
render(){
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}

}

export let StaticCounterContainer = connect(state => ({ user: state.user }))(StaticCounter);