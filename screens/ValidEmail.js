import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import styles from '../src/utils/styles'
import colors from '../src/utils/colors'
import Logo from '../src/components/Logo'


const ValidEmail = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState('');
  const [error, setError] = useState("")
  
  const handleSubmit = () => {
    
    firebase.validEmail()

    .then(tot => {
    alert(
      `\nTraitement en cours\n\nVous allez reçevoir un email à ${email}\n\nNota:\n   Si vous ne reçevez pas cet email\n   Consultez vôtre dossier\n   'Courrier indésirable'`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false },
      )
      navigation.push("SignIn")
    })

    .catch(error => {
      setError(error)
      })
  }
  const errorMsg = error !== '' && <Text>{error.message}</Text>
    return (
          <View style={styles.container}>
          <StatusBar barStyle='light-content' backgroundColor= {colors.background}></StatusBar>
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
                          type="email"
                          onChangeText={(val) => setEmail(val)}
                          />
                    </View>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text
                        style={styles.button}>
                        Validez vôtre email !!
                      </Text>
                    </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.push("SignIn")}>
                    <View style={styles.signupcont}>
                      <Text style={styles.text}>Retour</Text>
                      <Text style={styles.signuptext}>SignIn !!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
          </View>
    )
  }

export default ValidEmail
