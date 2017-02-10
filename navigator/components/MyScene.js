import React, { Component, PropTypes } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MyScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>

        <View style={styles.btn}>
         <Button onPress={this.props.onForward} title="Next Screen"/> 
        </View>
        
        <View style={styles.btn}> 
          <Button onPress={this.props.onBack} title="Previous Screen" color="#841584"/>
        </View>

        <View>
          <Button onPress={this.props.onHome} title="Home" color="red"/>
        </View>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 5,
  }
});

export default MyScene;