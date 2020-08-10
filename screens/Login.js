import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase'

import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'

export default class Login extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    }
  }

  state = {
    email: '',
    password: '',
    errorMessage : null
  }

  handleLogin = () => {
    const {email, password} = this.state
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle='light-content'></StatusBar>
          <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 65}}>
          </Image>
          <Text style={styles.text}> Application d'aide à la mise en service </Text>
          <Logo/>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>
          <View style={styles.container1}>
            <View style={styles.container2}>
              <Ionicons name="ios-mail" color={'white'} size={24}></Ionicons>
                <TextInput style={styles.inputBox}
                  placeholder="Email"
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
            </View>
            <View style={styles.container2}>
              <Ionicons name="ios-lock" color={'white'} size={24}></Ionicons>
                <TextInput style={styles.inputBox}
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={true}  
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
            </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
            <View style={styles.signupcont}>
              <Text style={styles.text}>Vous n'avez pas de compte?</Text>
              <Text style={styles.signuptext}>Sign Up!!</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={this.handleLogin}>
              <Text
                style={styles.button}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.background,
    minHeight: 750
  },
  container1: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
  },
  container2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: 5,
    margin: 5,
    borderColor: colors.borderinput,
    borderWidth: 1,
    borderRadius: 25,
  },
  inputBox: {
    width: 200,
    paddingHorizontal: 8,
    margin: 4,
    color: colors.texte,
  },
  inputBox1: {
      width: 100,
      paddingHorizontal: 8,
      margin: 8,
      color: colors.texte,
      borderColor: colors.borderinput,
      borderRadius: 25,
  },
  button: {
    width: 250,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    backgroundColor: colors.buttonlogin,
    borderColor: colors.borderinput,
    borderWidth: 1,
    borderRadius: 25,
    color: colors.texte,
    textAlign: 'center',
},
  text: {
      margin: 8,
      paddingHorizontal: 8,
      color: colors.texte,
      justifyContent: 'center',
      textAlignVertical: 'center',
  },
  signupcont: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  signuptext: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: colors.signuptext,
    textAlignVertical: 'center',
  },
  accounttext: {
    paddingHorizontal: 8,
    color: colors.accounttext,
    textAlignVertical: 'center',
  },
  errorMessage: {
    margin: 4,
    height: 48,
    color: colors.accounttext,
    justifyContent: 'center',
    alignItems:'center',
  },
  error: {
    color: "#E9446A",
    textAlignVertical: 'center',
  },
})
