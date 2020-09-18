import React from 'react'
import { View, Image, Button} from 'react-native'

import styles from '../utils/styles'

const Sommaire = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <Button title="Ansi" onPress={() => navigation.push("Ansi", {name: "Ansi")}></Button>
        <Button title="Mot de passe" onPress={() => navigation.push("Mot de passe", {name: "Mot de passe"})}></Button>
      </View>
    )
}
export default Sommaire
