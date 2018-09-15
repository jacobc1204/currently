import React from 'react';
import { StyleSheet, Platform, AsyncStorage, View, Text, TextInput } from 'react-native';

import Btn from '../components/button';

function setGoal() {
  const { navigate } = this.props.navigation;
  AsyncStorage.setItem('goal', this.state.goal)
    .then(() => {
      navigate('Home');
    })
    .catch((error) => {console.log(error)})
    .done();
}

export default class GoalScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      goal: 0,
    }
    setGoal = setGoal.bind(this);
  }

  static navigationOptions = {
    title: 'Set Goal',
  };

  render() {
    return (
      <View style={ styles.container } >
        <Text style={ styles.text } >How many books would you like to read this year?</Text>
        <TextInput
          style={ styles.input }
          keyboardType="numeric"
          placeholder="45"
          onChangeText={ (goal) => this.setState({ goal }) }
          underlineColorAndroid="transparent"
          placeholderTextColor="#bbb"
        />
        <Btn title="Set Goal" onPress={ setGoal } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    fontFamily: 'karla',
    fontSize: 14,
    color: '#3d3d3d',
  },
  input: {
    fontFamily: 'karla',
    height: 50,
    width: 300,
    fontSize: 24,
    margin: 15,
    backgroundColor: '#DDD',
    textAlign: 'center',
    borderRadius: 5,
    color: '#3d3d3d',
  }
});
