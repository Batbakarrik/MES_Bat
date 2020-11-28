import React, { Component } from 'react'
import { Text, View, ActivityIndicator, Image} from 'react-native'

import styles from '../src/utils/styles'
import {expo} from '../app.json'
export default class Loading extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 450, right: 70}}>
        </Image>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: -350, right: 80}}>
        </Image>
        <View style={{ 
          flex: 0.6,
          flexDirection: 'row',
          alignItems: 'stretch'}}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 40,
            textAlign: 'left',
            color: "#7ea9b1",
            transform: [{ rotate: '90deg'}]}}>{"MES_BAT V " + expo.version}</Text>
        </View>
        <View style={{flex: 0.1}}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            paddingBottom: 4,
            paddingTop: 8,
            color: "#4c757d"}}>Chargement de l'application</Text>
        </View>
        <View style={{flex: 0.25}}>
          <ActivityIndicator size="large" color="#4c757d"></ActivityIndicator>
        </View>
        <View style={{flex: 0.25}}>
          <Image source={require("../assets/tm_dev.png")} style= {{position:"relative", top: 0, left: 110}}>
          </Image>
        </View>
      </View>
    )
  }
}