import React from 'react';
import { StyleSheet, View, Share, AsyncStorage } from 'react-native';

import Progress from '../components/progress';
import Btn from '../components/button';
import Recents from '../components/recents';

function sharing() {
  Share.share({
    message: 'Look at how many books I have read.',
    url: undefined,
    title: 'My reading challenge!'
  }, {
    dialogTitle: 'My reading challenge!',
  });
}

function getData() {
  const { navigate } = this.props.navigation;
  AsyncStorage.multiGet(['books', 'goal'])
    .then((data) => {
      books = data[0][1];
      goal = data[1][1];
      if (!goal) {
        navigate('Goal');
      }
      if (books !== null) {
        books = JSON.parse(books);
        this.setState({ books, count: books.length, goal });
      }
    })
    .done();
}

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [],
      count: 0,
      goal: 0,
    };
    getData = getData.bind(this);
  };

  static navigationOptions = {
    title: 'Currently',
  };

  componentDidMount() {
    getData();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container } >
        <Progress count={ this.state.count } goal={ this.state.goal } />
        <View style={ styles.buttons } >
          <Btn title="Log" onPress={() => navigate('Log', { getData })} />
          <Btn title="Share" onPress={ sharing } />
        </View>
        <View style={ styles.lists } >
          <Recents books={ this.state.books } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  lists: {
    justifyContent: "flex-start",
    height: 320,
  },
});
