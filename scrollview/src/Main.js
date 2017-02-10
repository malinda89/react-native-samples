import React, { Component } from 'react';
import { 
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

class Main extends Component {
  render() {

    // Add items to scroll view
    const addScrollItems = () => {
      const itemArr = [];
      
      for (var i=0; i < 20; i ++) {
        itemArr.push(<Text key={i} style={styles.item}>item {i+1}</Text>);
      }

      return itemArr;
    };

    return (
      <View>

        <View>  
          <Text style={styles.header}>Vertical Scroll View</Text>
          
          <Button onPress={() => { this.refs._scrollViewY.scrollTo({y:0}); }} title="Scroll To Top" color="#859884"/>
          
          <ScrollView style={styles.container} ref='_scrollViewY'>
            { addScrollItems() }
          </ScrollView>
        </View>

        <View>
          <Text style={styles.header}>Horizontal Scroll View</Text>
          
          <Button onPress={() => { this.refs._scrollViewX.scrollTo({y:0}); }} title="Scroll To Top" color="#841584"/>
          
          <ScrollView horizontal={true} ref='_scrollViewX'>
            { addScrollItems() }
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
   header: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
   },
   container: {
      height: 300,
      backgroundColor: 'skyblue'
   },
   item: {
      margin: 15,
      padding: 15,
      borderColor: 'red',
      borderWidth: 1
   }
})

export default Main;