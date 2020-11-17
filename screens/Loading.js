import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar, Image} from 'react-native'

import styles from '../src/utils/styles'
import colors from '../src/utils/colors'

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={colors.background} ></StatusBar> */}
        <View style={styles.container1}>
        <Image 
          style= {{ width: 400, height: 867, top: -20}}
          resizeMode= "contain"
          source={require("../assets/splash.png")}
          >
          </Image>
          {/* <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" color="#4c757d"></ActivityIndicator> */}
        </View>
      </View>
    )
  }
}