import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class ChatterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <View style={styles.chatterFeed}>
				<View style={styles.chatterFeedContainer}>
          <Text>{"Chatter Feed"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	chatterFeed: {
		height: '100%'
	},
	chatterFeedContainer: {
		height: '80%',
	}
});


export default ChatterFeed;