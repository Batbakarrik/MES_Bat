import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'

import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'

export default class Signup extends Component {
  static navigationOptions = {
    title: 'SignUp',
    headerStyle: {
      backgroundColor: colors.background,
    },
  };

  state = {
    name: '',
    email: '',
    password: '',
    errorMessage : null
  };

  handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        })
      })
      .catch(error => this.setState({ errorMessage: error.message}));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        {/* <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Ionicons name="ios.arrow.back" size={32} color="#FFF"/>
        </TouchableOpacity> */}
        <Text style={styles.text}> Veuillez remplir les champs </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
        <View style={styles.container1}>
        <TextInput style={styles.inputBox}
            placeholder="name"
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
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
          <TouchableOpacity onPress={this.handleSignup}>
            <Text
              style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupcont}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.accounttext}>Don't have an account yet?</Text>
            <Text style={styles.signuptext}>Login!!</Text>
          </TouchableOpacity>
        </View>
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
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
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
  back: {
    position: "absolute",
    top: 48,
    left: 42,
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center"
  }
})
