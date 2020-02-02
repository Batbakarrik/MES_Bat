import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import colors from '../src/utils/colors'

import * as firebase from 'firebase'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: colors.texte,
    },
  };

  state = {
    email: "",
    displayName: ""
  }

  componentDidMount = () => {
    const { email, displayName} = firebase.auth().currentUser
    this.setState({ email, displayName})
  }

  signOutUser = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <TouchableOpacity onPress={this.signOutUser}>
          <Text style={styles.button}>LogOut</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.background,
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
})
