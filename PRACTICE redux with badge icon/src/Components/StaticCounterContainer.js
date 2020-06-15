
import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';


export default function StaticCounter({ count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{count}</Text>
    </View>
  );
}