var React = require('react-native');

const styles = React.StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  
  flexContainerCol: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  flexItem: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'red'
  },

  flexTextItem: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
  }

});

module.exports = styles;