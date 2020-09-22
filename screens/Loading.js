import React, { Component } from 'react'
import { Text, View, ActivityIndicator, Image} from 'react-native'

import styles from '../src/utils/styles'
export default class Loading extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 70}}></Image>
        <View style={styles.container1}>
          <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" color="#4c757d"></ActivityIndicator>
        </View>
      </View>
    )
  }
}