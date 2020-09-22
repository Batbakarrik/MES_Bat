import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from '../src/utils/styles'
import Logo from '../src/components/Logo'


const ResetPwd = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    firebase.passwordReset(email)

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
            <View style={styles.errMessage}>
             {/* { success && <span style={styles.errMessage}>{success}</span>} */}
             {/* { error && <span style={styles.errMessage}>{errorMessage}</span>} */}
             </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                      <Ionicons name="ios-mail" color={'white'} size={24}></Ionicons>
                        <TextInput style={styles.inputBox}
                          placeholder="Email"
                          autoCapitalize="none"
                          value={email}
                          type="email"
                          onChange={e => setEmail(e.target.value)}
                          />
                    </View>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text
                        style={styles.button}>
                        Réinitialisez !!
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
        </form>
      </ScrollView>
    )
  }

export default ResetPwd
