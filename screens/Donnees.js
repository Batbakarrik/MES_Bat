import React from 'react'
import { View, Image, Button} from 'react-native'

import styles from '../src/utils/styles'

const Donnees = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
      <Button title="Ansi" onPress={() => navigation.push("Ansi", {name: "Ansi"})}></Button>
      <Button title="Password" onPress={() => navigation.push("Password", {name: "Password"})}></Button>
    </View>
  )
}
export default Donnees