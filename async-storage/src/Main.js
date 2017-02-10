import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Slider,
  Switch,
  Button,
  AsyncStorage
} from 'react-native';

class Main extends Component {
  constructor() {
    super();

    this.saveProperties = this.saveProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);


    //Initial state
    this.state = {
      name: '',
      ethnicity: '',
      gender: true,
      height: 0
    };
  }

  componentDidMount() {
    this.getProperties();
  }

  // Load person props from storage
  getProperties() {
    AsyncStorage.getItem('person').then((obj) => {
      const person = JSON.parse(obj);
      
      this.setState({
        name: person.name,
        ethnicity: person.ethnicity,
        gender: person.gender,
        height: person.height
      })  

    }).done();
  }

  // Save person props to storage
  saveProperties() {
    AsyncStorage.setItem('person', JSON.stringify(this.state), () => {
      alert('Person props saved!');
      console.log('person saved to storage!');
    });
  }

  render () {
    return(
      <View>

        <Text style={styles.header}>Async Storage - Person Properties</Text>

        <View style={styles.itemContainer}>
          <Text>Name</Text>
          <TextInput 
            style={{height: 40}}
            onChangeText={(nameVal) => this.setState({name: nameVal})}
            value={this.state.name}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text>Select Ethnicity</Text>
          <Picker selectedValue={this.state.ethnicity} onValueChange={(ethnicityValue) => this.setState({ethnicity: ethnicityValue})}>
            <Picker.Item label="Latin" value="Latin" />
            <Picker.Item label="Indian" value="Indian" />
            <Picker.Item label="White" value="White" />
            <Picker.Item label="Asian" value="Asian" />
            <Picker.Item label="African" value="African" />
            <Picker.Item label="Celtic" value="Celtic" />
          </Picker>
        </View>

        <View style={styles.itemContainer}>
          <Text>Gender: {this.state.gender ? 'Male' : 'Female'}</Text>
          <View style={styles.flexContainer}>
            <Switch
              onValueChange={(value) => this.setState({gender: value})}
              style={{}}
              value={this.state.gender} 
            />
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text>Height: {this.state.height} ft.</Text>
          <Slider
          value={this.state.height}
          step={1}
          minimumValue={0}
          maximumValue={15}
          onSlidingComplete={(value) => this.setState({height: value})} />
        </View>

        <View style={styles.itemContainer}>
          <Button
            onPress={this.saveProperties}
            title="Save My Props!"
            color="#841584"
          />
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
    margin: 20
  },

  flexContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
})

export default Main;