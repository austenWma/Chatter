import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DiscoverFeed from '../DiscoverFeed/DiscoverFeed';
import ChatterFeed from '../ChatterFeed/ChatterFeed';

import NavBar from './NavBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Entypo';


class LandingRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

		return	(
      <ScrollableTabView
        style={{marginTop: 20}}
        initialPage={1}
        renderTabBar={() => <NavBar />}
        tabBarPosition={'bottom'}
        tabBarUnderlineStyle={{backgroundColor: 'blue'}}
      >
        {/* <View tabLabel='Discover'><DiscoverFeed /></View>
        <View tabLabel='Upload'></View>
        <View tabLabel='Chatter'><ChatterFeed /></View> */}
        <ScrollView tabLabel="ios-planet-outline" style={styles.tabView}>
          <DiscoverFeed />
        </ScrollView>
        <ScrollView tabLabel="ios-microphone-outline" style={styles.tabView}>
          <Text>News</Text>
        </ScrollView>
        <ScrollView tabLabel="ios-home" style={styles.tabView}>
          <ChatterFeed />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
	landingRecord: {
		height: '100%'
	},
	landingRecordContainer: {
		height: '80%',
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  tabView: {
    flex: 1,
    padding: 10,
  },
});


export default LandingRecord;
