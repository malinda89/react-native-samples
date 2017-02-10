import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';

var dataArr = ["item 1","item 2","item 3"];

class Home extends Component {
  
  constructor() {
    super();

    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(dataArr)
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <Text style={{fontSize: 20, color: '#000000'}} >{rowData}</Text>
        <View style={{height: 5, backgroundColor: '#dddddd'}}/>
      </View>
    );
  }

  render() {
    return(
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}>
      </ListView>
    );
  }

}

module.exports = Home;