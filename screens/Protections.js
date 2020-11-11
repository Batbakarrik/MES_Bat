import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from '../src/utils/styles'

const Protections = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.push("COURANT", {name: "Protection Courant"})}>
            <Text style={styles.button}>Protection Courant</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.push("TENSION", {name: "Protection Tension"})}>
            <Text style={styles.button}>Protection Tension</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity style={{activeOpacity:2}} onPress={() => navigation.push("THERMIQUE", {name: "Protection Thermique"})}>
            <Text style={styles.button}>Protection Thermique</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}
export default Protections