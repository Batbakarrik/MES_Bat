import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import firebase from '../src/firebase'

import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'

const SignIn = ({ navigation }) => {
  const { firebase } = useContext(FirebaseContext)
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = () => {
    firebase.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
    })
    .catch(error => {
      console.error(error)
    })
  }

    return (
      <ScrollView>
        <form>
          <View style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 65}}>
            </Image>
            <Text style={styles.text}> Application d'aide à la mise en service de RPN</Text>
            <Logo/>
            <View style={styles.errorMessage}>
              {/* {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>} */}
            </View>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <Ionicons name="ios-mail" color={'white'} size={24}></Ionicons>
                      <TextInput style={styles.inputBox}
                        placeholder="Email"
                        autoCapitalize="none"
                        value={email}
                        onChange={e => setemail(e.target.value)}
                        />
                  </View>
                  <View style={styles.container2}>
                    <Ionicons name="ios-lock" color={'white'} size={24}></Ionicons>
                      <TextInput style={styles.inputBox}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                      />
                  </View>
                  <TouchableOpacity onPress={() => navigation.push("Signup")}>
                    <View style={styles.signupcont}>
                      <Text style={styles.text}>Vous n'avez pas de compte?</Text>
                      <Text style={styles.signuptext}>Sign Up!!</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLogin}>
                    <Text
                      style={styles.button}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
          </View>
        </form>
      </ScrollView>
    )
  }

export default SignIn

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
