import React from 'react';
import { StyleSheet, Platform, View, TextInput, AsyncStorage, ToastAndroid, Vibration } from 'react-native';

import Btn from '../components/button';

export default class LogScreen extends React.Component {

  addBook = async (book) => {
    const { navigate } = this.props.navigation;
    try {
      var books = await AsyncStorage.getItem('books');
      if (books !== null) {
        books = JSON.parse(books);
        books.push(book);
        AsyncStorage.setItem('books', JSON.stringify(books));
        this.props.navigation.state.params.getData();
        Vibration.vibrate();
        navigate('Home');
      } else {
        AsyncStorage.setItem('books', JSON.stringify([book]));
        this.props.navigation.state.params.getData();
        Vibration.vibrate(600);
        navigate('Home');
      }
    } catch (error) {
      alert(error);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      book: '',
      author: '',
      date: '',
    };
  };

  static navigationOptions = {
    title: 'Log',
  };

  render() {
    return (
      <View style={ styles.container } >
        <TextInput
          style={ styles.input }
          placeholder="Inkheart"
          onChangeText={ (book) => this.setState({ book }) }
          underlineColorAndroid="transparent"
          placeholderTextColor="#bbb"
          autoCapitalize="words"
        />
        <TextInput
          style={ styles.input }
          placeholder="Cornelia Funke"
          onChangeText={ (author) => this.setState({ author }) }
          underlineColorAndroid="transparent"
          placeholderTextColor="#bbb"
          autoCapitalize="words"
        />
        <TextInput
          style={ styles.input }
          placeholder="September 30 2018"
          onChangeText={ (date) => this.setState({ date }) }
          underlineColorAndroid="transparent"
          placeholderTextColor="#bbb"
          autoCapitalize="words"
        />
        <View style={ styles.button } >
          <Btn
            title="Log"
            onPress={ () => this.addBook({
              book: this.state.book,
              author: this.state.author,
              date: this.state.date,
            }) }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  input: {
    color: '#3d3d3d',
    fontFamily: 'karla',
    height: 50,
    width: 300,
    fontSize: 24,
    margin: 15,
    backgroundColor: '#DDD',
    textAlign: 'center',
    borderRadius: 5,
  },
  button: {
    width: 300,
    alignItems: 'flex-end',
  },
});
