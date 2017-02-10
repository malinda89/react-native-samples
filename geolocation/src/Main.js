import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown'
    }
  }

  watchID = (null: ?number);

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert('Current pos retrieved!');
        var initialPosition = JSON.stringify(position);
        this.setState({
          initialPosition
        });
      },
      (error) => alert(error.message), {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000
      }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({
        lastPosition
      });
    });
  }
  
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Geolocation</Text>
        <View>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            {this.state.initialPosition}
          </Text>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            {this.state.lastPosition}
          </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
   header: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontSize: 17
   }
})

export default Main;