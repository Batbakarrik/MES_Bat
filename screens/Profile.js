import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native'

import colors from '../src/utils/colors'
import {expo} from '../app.json'


export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>"Profile"</Text>
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
  container1: {
    paddingTop: 30,
  },
  container2: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container3: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    textAlignVertical: 'center',
  },
  textlien: {
    margin: 8,
    paddingHorizontal: 8,
    color: colors.texte,
    textAlignVertical: 'center',
  },
})
