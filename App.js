import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Font } from 'expo';

import HomeScreen from './screens/home';
import LogScreen from './screens/log';
import GoalScreen from './screens/goal';

class App extends React.Component {

  RootStack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Log: { screen: LogScreen },
      Goal: { screen: GoalScreen },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#303036',
        },
        headerTitleStyle: {
          color: '#FFFAFF',
          fontWeight: 'normal',
          fontFamily: 'karla',
        },
        headerTintColor: '#FFFAFF',
      },
    },
  );

  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'karla': require('./assets/fonts/Karla-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <this.RootStack />
      )
    } else {
      return (
        <View style={ styles.container } >
          <Text>Loading...</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
})

export default App;
