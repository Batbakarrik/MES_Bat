import React, { useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native'

import styles from '../src/utils/styles'
import {expo} from '../app.json'

const  Home = ({ navigation }) => {
  const { user, firebase } = useContext(FirebaseContext)
  
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
          <TouchableOpacity style={{activeOpacity:2}} onPress={() => firebase.logout()}>
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