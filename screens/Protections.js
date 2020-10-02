import React from 'react'
import { View, Image, Button} from 'react-native'

import styles from '../src/utils/styles'

const Protections = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <Button title="Protection Courant" onPress={() => navigation.push("Courant", {name: "Protection Courant"})}></Button>
        <Button title="Protection Tension" onPress={() => navigation.push("Tension", {name: "Protection Tension"})}></Button>
        <Button title="Protection Thermique" onPress={() => navigation.push("Thermique", {name: "Protection Thermique"})}></Button>
      </View>
    )
}
export default Protections