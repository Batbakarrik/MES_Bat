import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image} from 'react-native'
import {FirebaseContext} from '../src/firebase'
import { Ionicons } from '@expo/vector-icons'

import Logo from '../src/components/Logo'
import styles from '../src/utils/styles'

const SignUp = ({ navigation }) => {
  const {firebase , user} = useContext(FirebaseContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
console.log(user)
  const handleSignup = () => {
    firebase.signUp(email, password)
      .then(userCredentials => {
        if(user === false){
          userCredentials.user.sendEmailVerification()
          .then(function(){
          console.log("email verification sent to user");
          });
          return (
            userCredentials.user.updateProfile({displayName: name})
          )
        }
        setName(''),
        setEmail(''),
        setPassword(''),
        navigation.push("SignIn")
      })
      .catch(error => {
        setError(error)
      });
    }
        const errorMsg = error !== '' && <span>{error.message}</span>
        
    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 40}}>
        </Image>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.text}> Veuillez remplir les champs </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
        <View style={styles.container1}>
          <form>
            <View style={styles.container2}>
              <Ionicons name="ios-person-add" color={'white'} size={24}></Ionicons>
              <TextInput style={styles.inputBox}
                  placeholder="Name"
                  autoCapitalize="none"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
            </View>
            <View style={styles.container2}>
              <Ionicons name="ios-mail" color={'white'} size={24}></Ionicons>
                <TextInput style={styles.inputBox}
                  placeholder="Email"
                  autoCapitalize="none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
            </View>
            <View style={styles.container2}>
              <Ionicons name="ios-lock" color={'white'} size={24}></Ionicons>
                <TextInput style={styles.inputBox}
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={true}  
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
            </View>
            <TouchableOpacity onPress={handleSignup}>
              <Text
                style={styles.button}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("SignIn")}>
              <View style={styles.signupcont}>
                <Text style={styles.text}>Retour</Text>
                <Text style={styles.signuptext}>SignIn !!</Text>
              </View>
            </TouchableOpacity>
          </form>
        </View>
      </View>
    )
  }

export default SignUp