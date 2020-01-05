import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import Logo from '../src/components/Logo'
import Form from '../src/components/Form'
import colors from '../src/utils/colors';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Application d'aide à la mise en service </Text>
        <Logo/>
        <Form/>
        <View style={styles.signupcont}>
          <Text style={styles.accounttext}>Don't have an account yet?</Text>
          <Text style={styles.signuptext}>Sign Up!!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
  },
  inputBox: {
      width: 100,
      paddingHorizontal: 8,
      margin: 8,
      color: colors.texte,
      borderColor: colors.borderinput,
      borderRadius: 25,
  },
  button: {
      width: 100,
      margin: 8,
      paddingHorizontal: 8,
      backgroundColor: colors.button,
      borderColor: colors.borderinput,
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
})
