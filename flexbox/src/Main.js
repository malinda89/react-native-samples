import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Styles from './resources/styles/style.js';

const Main = () => {
  return (
    <View>
      <View style={Styles.flexContainer}>
        <View style={Styles.flexItem} />
        <View style={Styles.flexItem} />
        <View style={Styles.flexItem} />
      </View>

      <View style={Styles.flexContainerCol}>
        <View style={Styles.flexItem} />
        <View style={Styles.flexItem} />
        <View style={Styles.flexItem} />
      </View>

      <View style={Styles.flexContainer}>
        <View style={Styles.flexTextItem}>
          <Text>Text Component 1, hello there... this is some random text</Text>
        </View>
        
        <View style={Styles.flexTextItem}>
          <Text>Text Component 2, hello there... this is some random text</Text>
        </View>
      </View>
    </View>
  );
}

export default Main;