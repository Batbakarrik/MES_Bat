import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from '../src/utils/styles'
import Logo from '../src/components/Logo'

const SignIn = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    firebase.signIn(email, password)
    .then(userCredential=> {
      console.log(userCredential.user.emailVerified)
      if(userCredential.user.emailVerified === false){
        alert(`Veuillez confirmer vôtre email. Consultez vôtre Boite mail ${email}`)
      }
      setEmail(''),
      setPassword('')
    })
    .catch(error => {
      setError(error)
    });
  }

  const errorMsg = error !== '' && <span>{error.message}</span>

    return (
      <ScrollView>
          <View style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 65}}>
            </Image>
            <Text style={styles.text}> Application d'aide à la mise en service de RPN</Text>
            <Logo/>
            <View style={styles.errorMessage}>
              <Text style={styles.error}>{errorMsg}</Text>
            </View>
                <View style={styles.container1}>
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
                  <TouchableOpacity onPress={() => navigation.push("Signup")}>
                    <View style={styles.signupcont}>
                      <Text style={styles.text}>Vous n'avez pas de compte?</Text>
                      <Text style={styles.signuptext}>Sign Up !!</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLogin}>
                    <Text
                      style={styles.button}>
                      Login
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.push("ResetPwd")}>
                      <View style={styles.signupcont}>
                      <Text style={styles.text}>Mot de passe Oublié?</Text>
                      <Text style={styles.signuptext}>Réinitialisez le !!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
          </View>
      </ScrollView>
    )
  }

export default SignIn
