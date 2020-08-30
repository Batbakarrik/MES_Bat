import React, { useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native'

import colors from '../src/utils/colors'
import {expo} from '../app.json'

const  Home = ({ navigation }) => {
  const { user, firebase } = useContext(FirebaseContext)

  // state = {
  //   email: "",
  //   displayName: ""
  // }

  // componentDidMount = () => {
  //   const { email, displayName} = firebase.auth.currentUser
  //   this.setState({ email, displayName})
  // }

    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <View style={styles.container1}>
          <Text style={styles.text}>{user.displayName}</Text>
          <Text style={styles.text}>Aide:</Text>
          <Text style={styles.text}>Dans l'onglet 'Courant' rentrez les caractéristiques des TC, le seuil, la courbe de déclenchement. Confirmer en cliquant sur 'Calculer'</Text>
          <Text style={styles.text}>Dans l'onglet 'Tension' rentrez les caractéristiques des TP, le seuil. Confirmer en cliquant sur 'Calculer'</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} /*onPress={firebase.logout()}*/>
            <Text style={styles.button}>LogOut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.button}>Drawer Acces</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Text style={styles.textlien}
            onPress={() => Linking.openURL('https://reglesdeconfidentialite.xipitei.com')}>
            Règles de confidentialité: Cliquez ici
          </Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:xipitei.dev@xipitei.com?subject=App MES_Bat&body=')}>
          <Text style={styles.textlien}>Contactez moi : Cliquez ici</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{"Application version " + expo.version}</Text>
      </View>
    )
  }
export default Home

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
