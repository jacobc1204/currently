import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Btn extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={ styles.button }
          onPress={ this.props.onPress }
        >
          <Text style={ styles.text } >{ this.props.title }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Btn;

const styles = StyleSheet.create({
  button: {
    width: 145,
    height: 45,
    backgroundColor: '#5CBCEC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#666',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    }
  },
  text: {
    fontFamily: 'karla',
    fontSize: 17,
    color: '#3d3d3d',
  }
});
