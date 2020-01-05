import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import Index from './screens/Index'
import colors from './src/utils/colors'

export default class App extends Component {
  render(){
      return (
        <View style={styles.container}>
          <StatusBar
            hidden= {false}
          />
          <Index/>
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