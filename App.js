
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import BottomBar from './app/Components/NavBars/BottomBar/BottomBar';
import Login from './app/Components/Login/Login';
import LandingRecord from './app/Components/LandingRecord/LandingRecord';
import DiscoverFeed from './app/Components/DiscoverFeed/DiscoverFeed';
import ChatterFeed from './app/Components/ChatterFeed/ChatterFeed';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="Login" component={Login} initial ={null} hideNavBar/>
          <Scene key="tabbar" tabs={true} tabBarComponent={BottomBar} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            <Scene key="LandingRecord" component={LandingRecord} panHandlers={null} hideNavBar/>
            <Scene key="DiscoverFeed" component={DiscoverFeed} panHandlers={null} hideNavBar/>
            <Scene key="ChatterFeed" component={ChatterFeed} panHandlers={null} hideNavBar/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  
});
