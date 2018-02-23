import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import TopBar from '../NavBars/TopBar/TopBar';
import BottomBar from '../NavBars/BottomBar/BottomBar';

class ChatterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <View style={styles.landingRecord}>
        <TopBar />
				<View style={styles.landingRecordContainer}>
          <Text>{"Chatter Feed"}</Text>
        </View>
        <BottomBar currPage={'ChatterFeed'}/>
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


export default ChatterFeed;