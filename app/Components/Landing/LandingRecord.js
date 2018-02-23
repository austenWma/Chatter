import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class LandingRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <View style={styles.landingRecord}>
				<View style={styles.landingRecordContainer}>
          <Text>{"Landing Record"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	landingRecord: {
		height: '100%'
	},
	landingRecordContainer: {
		height: '80%',
	}
});


export default LandingRecord;