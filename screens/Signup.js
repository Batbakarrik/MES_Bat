import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'

import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'

export default class Signup extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  state = {
    name: '',
    email: '',
    password: '',
    errorMessage : null
  }

  handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName: this.state.name
      })
    })
    .catch(error => this.setState({ errorMessage: error.message}));
    // .then(function(user){
    //   if(user && user.emailVerified === false){
    //     user.sendEmailVerification().then(function(){
    //       console.log("email verification sent to user");
    //     });
    //   }
    // })
    // .catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;

    //   console.log(errorCode, errorMessage);
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 40}}>
        </Image>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.text}> Veuillez remplir les champs </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Ionicons name="ios-person-add" color={'white'} size={24}></Ionicons>
            <TextInput style={styles.inputBox}
                placeholder="name"
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
          </View>
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
          <TouchableOpacity onPress={this.handleSignup}>
            <Text
              style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupcont}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.accounttext}>Don't have an account yet?</Text>
            <Text style={styles.signuptext}>Login!!</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  back: {
    position: "absolute",
    top: 48,
    left: 42,
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center"
  }
})
