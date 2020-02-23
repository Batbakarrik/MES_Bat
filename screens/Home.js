import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

import colors from '../src/utils/colors'

import * as firebase from 'firebase'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
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
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 40}}>
        </Image>
        <Text style={styles.text}> Aide: </Text>
        <Text style={styles.text}> Dans l'onglet 'Courant' rentrez les caractéristiques des TC, confirmer en cliquant sur 'Calculer coef'</Text>
        <Text style={styles.text}>-</Text>
        <TouchableOpacity style={{activeOpacity:2}} onPress={this.signOutUser}>
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
  text: {
    margin: 8,
    paddingHorizontal: 8,
    color: colors.texte,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
})
