import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DiscoverFeed from '../DiscoverFeed/DiscoverFeed';
import ChatterFeed from '../ChatterFeed/ChatterFeed';
import LandingRecord from './LandingRecord';

import NavBar from './NavBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Entypo';


class LandingPage extends Component {
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
      >
        <ScrollView tabLabel="ios-planet-outline" style={styles.tabView}>
          <DiscoverFeed />
        </ScrollView>
        <ScrollView tabLabel="ios-microphone-outline" style={styles.tabView}>
          <LandingRecord />
        </ScrollView>
        <ScrollView tabLabel="ios-home" style={styles.tabView}>
          <ChatterFeed />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
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


export default LandingPage;
