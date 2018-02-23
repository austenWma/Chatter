import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class DiscoverFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <View style={styles.discoverFeed}>
				<View style={styles.discoverFeedContainer}>
          <Text>{"Discover Feed"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	discoverFeed: {
		height: '100%'
	},
	discoverFeedContainer: {
		height: '80%',
	}
});


export default DiscoverFeed;