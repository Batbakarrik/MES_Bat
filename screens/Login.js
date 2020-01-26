import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'

import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: colors.background,
    },
  };

  state = {
    email: '',
    password: '',
    errorMessage : null
  };

  handleLogin = () => {
    const {email, password} = this.state
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.text}> Application d'aide à la mise en service </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
        <View style={styles.container1}>
          <TextInput style={styles.inputBox}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput style={styles.inputBox}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}  
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <Text
              style={styles.button}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
          <View style={styles.signupcont}>
            <Text style={styles.accounttext}>Don't have an account yet?</Text>
            <Text style={styles.signuptext}>Sign Up!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.background,
    borderColor: colors.borderinput,
    borderWidth: 1,
  },
  container1: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
  },
  inputBox: {
    width: 250,
    paddingHorizontal: 16,
    margin: 8,
    backgroundColor: colors.backgroundinput,
    borderColor: colors.borderinput,
    borderWidth: 1,
    borderRadius: 25,
    color: colors.texte,
  },
  inputBox1: {
      width: 100,
      paddingHorizontal: 8,
      margin: 8,
      color: colors.texte,
      borderColor: colors.borderinput,
      borderRadius: 25,
  },
  button: {
    width: 250,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    backgroundColor: colors.buttonlogin,
    borderColor: colors.borderinput,
    borderWidth: 1,
    borderRadius: 25,
    color: colors.texte,
    textAlign: 'center',
},
  text: {
      margin: 8,
      paddingHorizontal: 8,
      color: colors.texte,
      // borderColor: colors.borderinput,
      // borderWidth: 1,
      // borderRadius: 25,
      justifyContent: 'center',
      textAlignVertical: 'center',
  },
  signupcont: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  signuptext: {
    paddingHorizontal: 8,
    color: colors.signuptext,
    textAlignVertical: 'center',
  },
  accounttext: {
    paddingHorizontal: 8,
    color: colors.accounttext,
    textAlignVertical: 'center',
  },
  errorMessage: {
    margin: 4,
    height: 48,
    color: colors.accounttext,
    justifyContent: 'center',
    alignItems:'center',
  },
  error: {
    color: "#E9446A",
    textAlignVertical: 'center',
  },
})
