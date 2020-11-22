import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TouchableOpacity, StatusBar, Image, Linking } from 'react-native'

import styles from '../src/utils/styles'
import colors from '../src/utils/colors'

const  Home = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [isHidden, setIsHidden] = useState (true)

  const hidden = () => {
      if (firebase.auth.currentUser.uid === "5pzZJeVz9Te4RY7JvpedwcXF7T12") {
        setIsHidden(false)
    } else {
        setIsHidden(true)
    }
  }
  useEffect(() => {
    hidden()
  }, [])

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor= {colors.background}></StatusBar>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <View style={styles.container1}>
          <Text style={styles.text}>Aide:</Text>
          <Text style={styles.text}>Dans l'onglet 'Protections puis Courant' rentrez les caractéristiques des TC, le seuil ainsi que la courbe de déclenchement. Confirmer en cliquant sur 'Calculer'</Text>
          <Text style={styles.text}>Dans l'onglet 'Protection puis Tension' rentrez les caractéristiques des TP puis le seuil. Confirmer en cliquant sur 'Calculer'</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} onPress={() => firebase.logout()}>
            <Text style={styles.button}>LogOut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          { isHidden===false ?
            <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.toggleDrawer()}>
              <Text style={styles.button}>Drawer Acces</Text>
            </TouchableOpacity> :
            <View/>
          }
        </View>
        <View style={styles.container3}>
          <Text style={styles.textlien}
            onPress={() => Linking.openURL('https://reglesdeconfidentialite.xipitei.com')}>
            Règles de confidentialité: Cliquez ici
          </Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@app.xipitei.com?subject=App MES_Bat&body=')}>
          <Text style={styles.textlien}>Contactez moi : Cliquez ici</Text>
        </TouchableOpacity>
      </View>
    )
  }
export default Home