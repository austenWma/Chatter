import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
  }

  login() {
    console.log('LOGGING IN')
    Actions.LandingRecord()
  }

  render() {

		return	(
      <View style={styles.loginContainer}>
				<Text style={styles.loginTitleContainer}>{"Chatter"}</Text>
        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.inputFields}
            placeholder="Email"
            onChangeText={(text) => this.setState({email: text})}
            value={this.email}
            autoCorrect={false}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.inputFields}
            placeholder="Password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.password}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.loginButtonsContainer}>
          <TouchableOpacity onPress={this.login} style={styles.loginButton}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    height: '100%'
  },
  loginTitleContainer: {
    height: '45%',
    marginTop: '5%',
    paddingTop: '50%',
    textAlign: 'center'
  },
  inputFieldsContainer: {
    height: '20%',
    alignItems: 'center',
  },
  inputFields: {
    height: '50%',
    width: '60%'
  },
  loginButtonsContainer: {
    height: '40%',
  },
  loginButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Login;
