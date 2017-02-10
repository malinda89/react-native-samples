/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Home = require('./components/Home');

export default class listView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Product List</Text>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#483d8b',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 30,
  }
});

AppRegistry.registerComponent('listView', () => listView);
