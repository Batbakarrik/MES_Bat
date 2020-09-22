import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../src/utils/styles'
export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>"Profile"</Text>
      </View>
    )
  }
}