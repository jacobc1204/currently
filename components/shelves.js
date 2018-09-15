import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';

class Shelves extends React.Component {
  render() {
    return (
      <View style={ styles.container } >
        <Text style={ styles.header } >Shelves</Text>
        <Text style={ styles.text } >Read</Text>
        <Text style={ styles.text } >TBR</Text>
        <Text style={ styles.text } >Want</Text>
      </View>
    );
  };
}

export default Shelves;

const styles = StyleSheet.create({
  container: {
    height: 160,
    justifyContent: "space-evenly",
  },
  header: {
    fontFamily: 'karla',
    fontSize: 33,
    textAlign: 'center',
    color: '#3d3d3d',
  },
  text: {
    fontFamily: 'karla',
    fontSize: 20,
    textAlign: 'center',
    color: '#3d3d3d',
  }
});
