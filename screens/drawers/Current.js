import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'

export default class Current extends Component {

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
    console.log('ComponentDidMount')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
})
