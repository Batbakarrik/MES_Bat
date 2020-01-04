import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'

import Acceuil from './screens/Acceuil'
import colors from './utils/colors'

export default class App extends Component {
  render(){
      return (
        <View style={styles.container}>
          <StatusBar
            hidden= {true}
          />
          <Acceuil/>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      paddingTop: 24
  }
})