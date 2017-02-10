import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import MyScene from './components/MyScene';

export default class Nav extends Component {
  render() {
    const homeView = [
      { title: 'This is home screen', index: 0 }
    ];

    return (
      
      <Navigator
        initialRoute = {homeView[0]}
        renderScene = {(route, navigator) =>
          
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}

            // Jump to Home screen
            onHome={
              () => {
                navigator.popToTop();
              }
            }
          />

        }
      />

    );
  }
}

AppRegistry.registerComponent('Nav', () => Nav);
