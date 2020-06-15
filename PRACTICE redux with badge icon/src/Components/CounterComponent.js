import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';



export default function Counter({ count, dispatch, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{count}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: 'INCREMENT' })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: 'DECREMENT' })}
      />

      <Button
        title="Go to static count screen"
        onPress={() => navigation.navigate('StaticCounter')}
      />
    </View>
  );
}