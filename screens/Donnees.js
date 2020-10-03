import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'

import styles from '../src/utils/styles'

const Donnees = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.push("CODES", {name: "CODES"})}>
          <Text style={styles.button}>ANSI / IEC60617 / IEC61850</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.push("MOTS DE PASSE", {name: "MOTS DE PASSE"})}>
          <Text style={styles.button}>Mots de passe</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Donnees