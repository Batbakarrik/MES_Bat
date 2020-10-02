import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar, Image} from 'react-native'

import styles from '../src/utils/styles'
import colors from '../src/utils/colors'
export default class Loading extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.background} ></StatusBar>
        <Image source={require("../assets/icon.png")} style= {{position:"absolute", resizeMode:'contain', width:400, top:20}}></Image>
        {/* <View style={styles.container1}>
          <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" color="#4c757d"></ActivityIndicator>
        </View> */}
      </View>
    )
  }
}