import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <View style={styles.topBarContainer}>
				<Text>{"Top Bar"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	topBarContainer: {
		height: '10%',
		borderWidth: 1,
	}
});


export default TopBar;