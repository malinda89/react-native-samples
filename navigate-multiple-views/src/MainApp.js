import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  BackAndroid
} from 'react-native';

import Home from './Home';
import Detail from './Detail';

class MainApp extends Component {

  componentDidMount() {
    //the '.bind(this)' makes sure 'this' refers to 'ViewComponent'
    BackAndroid.addEventListener('hardwareBackPress', function() {
      this.refs.navigator.pop();
      return true;
    }.bind(this));
  }

  renderScene(route, navigator) {
    console.log('--route--')
    console.log(route);
    if (route.song) {
      return <Detail song={route.song} navigator={navigator} />
    }

    return <Home navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromBottom}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainApp;