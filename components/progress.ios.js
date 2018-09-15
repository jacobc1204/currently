import React from 'react';
import {
  StyleSheet,
  ProgressViewIOS,
  TouchableOpacity,
  Modal,
  Text,
  View
} from 'react-native';

class Progress extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  onPress = (visible) => {
    this.setState({ visible });
  }

  render() {
    let progress = (this.props.count / this.props.goal) || 0;
    return (
      <View>
        <Modal
          visible={ this.state.visible }
          animationType="slide"
          onRequestClose={ () => this.onPress(!this.state.visible) }
        >
          <View style={ styles.modal } >
            <Text style={ styles.modalText }>
              You have read { this.props.count } out of { this.props.goal } books.
            </Text>
            <TouchableOpacity
              onPress={ () => this.onPress(!this.state.visible) }
              style={ styles.closeBtn }
            >
              <Text style={ styles.btnText } >Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity onPress={ () => this.onPress(true) } >
          <Text style={ styles.text } >{ Math.floor(progress * 100) }%</Text>
        </TouchableOpacity>
        <ProgressViewIOS
          progress={ progress }
          progressTintColor="#FB4747"
          progressViewStyle="bar"
          style={ styles.bar }
        />
      </View>
    );
  }
}

export default Progress;

const styles = StyleSheet.create({
  bar: {
    flexGrow: 1,
    transform: [{ scaleY: 2.4 }],
  },
  text: {
    fontFamily: 'karla',
    textAlign: 'center',
    fontSize: 55,
    color: '#3d3d3d',
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'karla',
    fontSize: 22,
    color: '#3d3d3d',
  },
  closeBtn: {
    height: 45,
    width: 300,
    backgroundColor: '#5CBCEC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 4,
    margin: 45,
  },
  btnText: {
    fontFamily: 'karla',
    textAlign: 'center',
    fontSize: 17,
  },
});
