import React, { Component, version } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native'

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
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <View style={styles.container1}>
          <Text style={styles.text}>{"Version "+version}</Text>
          <Text style={styles.text}>Aide:</Text>
          <Text style={styles.text}>Dans l'onglet 'Courant' rentrez les caractéristiques des TC, le seuil, la courbe de déclenchement. Confirmer en cliquant sur 'Calculer'</Text>
          <Text style={styles.text}>Dans l'onglet 'Tension' rentrez les caractéristiques des TP, le seuil. Confirmer en cliquant sur 'Calculer'</Text>
        </View>
        <View style={styles.container3}>
        <Text style={styles.text}>Règles de confidencialitées:</Text>
          <Text style={styles.text}
            onPress={() => Linking.openURL('https://reglesdeconfidentialite.xipitei.com')}>
            Cliquez ici
          </Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} onPress={this.signOutUser}>
            <Text style={styles.button}>LogOut</Text>
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
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.background,
  },
  container1: {
    display: 'flex',
    flex:1,
    paddingTop: 30,
  },
  container2: {
    flex:1,
  },
  container3: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
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
    // justifyContent: 'center',
    textAlignVertical: 'center',
  },
})
