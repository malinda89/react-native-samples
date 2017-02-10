import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Switch,
  Slider
} from 'react-native';

class Main extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      text: 'This is a text input',
      picker: 'Blue',
      switch: true,
      slider: 5
    }
  }

  render () {
    return(
      <View>
        <Text style={styles.header}>Form Elements</Text>

        <View style={styles.itemContainer}>
          <Text>Text Input</Text>
          <TextInput 
            style={{height: 40}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text>Picker (pick a color)</Text>
          <Picker selectedValue={this.state.picker} onValueChange={(color) => this.setState({picker: color})}>
            <Picker.Item label="Black" value="Black" />
            <Picker.Item label="Green" value="Green" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Yellow" value="Yellow" />
          </Picker>
        </View>

        <View style={styles.itemContainer}>
          <Text>Switch</Text>
          <View style={styles.flexContainer}>
            <Switch
              onValueChange={(value) => this.setState({switch: value})}
              style={{}}
              value={this.state.switch} 
            />
            <Text>Switch is: {this.state.switch ? 'On' : 'Off'}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text>Slider</Text>
          <Slider
          value={this.state.slider}
          minimumValue={0}
          maximumValue={10}
          onSlidingComplete={(value) => this.setState({slider: value,})} />
          <Text>
            Completions: {this.state.slideCompletionCount} Value: {this.state.slider}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create ({
  header: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontSize: 17
  },

  itemContainer: {
    margin: 10
  },

  flexContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  }
})

export default Main;