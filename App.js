
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
import Login from './app/Components/Login/Login';
import LandingPage from './app/Components/Landing/LandingPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="Login" component={Login} initial ={null} hideNavBar/>
          <Scene key="LandingPage" component={LandingPage} panHandlers={null} hideNavBar/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  
});
