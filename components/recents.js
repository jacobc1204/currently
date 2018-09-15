import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Recents extends React.Component {

  renderBooks(books) {
    recents = books.reverse();
    return recents.slice(0, 4).map((book, i) => {
      return (
        <View key={ i } style={ styles.card }>
          <Text style={ styles.text }>{ book.book } by { book.author }</Text>
          <Text style={ styles.text }>{ book.date }</Text>
        </View>
      )
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header } >Recents</Text>
        {
          this.props.books ? this.renderBooks(this.props.books) : <Text style={ styles.text } >No books logged yet</Text>
        }
      </View>
    );
  }
}

export default Recents;

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: "flex-start",
  },
  header: {
    fontFamily: 'karla',
    fontSize: 33,
    textAlign: 'center',
    color: '#3d3d3d',
  },
  card: {
    marginTop: 10,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    width: 345,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 5,
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
    fontSize: 16,
    textAlign: 'center',
    color: '#3d3d3d',
  }
});
