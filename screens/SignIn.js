import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image, Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {expo} from '../app.json'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import styles from '../src/utils/styles'
import Logo from '../src/components/Logo'
import colors from '../src/utils/colors'


const SignIn = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hidePass, setHidePass] = useState(true)

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('myEmail', email)
    } catch (error) {
      alert(error)
    }
  }
  
  const getData = async () => {
    try {
      let email = await AsyncStorage.getItem('myEmail')
      if(email !== null) {
        setEmail(email)
      }
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleLogin = () => {

    const users = {email, password}

    firebase.signIn(users)
    
    .then(userCredential=> {
      storeData()
      if(userCredential.user.emailVerified === false){
        alert(`Veuillez confirmer vôtre email\nCliquez sur le lien envoyé à :\n${email}`)
      }
      setEmail(''),
      setPassword('')
    })
    .catch(error => {
      setError(error)
    });
  }

  const errorMsg = error !== '' && <Text>{error.message}</Text>
  
    return (
          <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor= {colors.background}></StatusBar>
            <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 65}}>
            </Image>
            <Text style={styles.text5}>{"Application d'aide à la mise en service de relais de protection numériques"}</Text>
            <Logo/>
            <Text style={{fontWeight: 'bold',color: "#7ea9b1", paddingTop:4}}> {"MES_BAT V" + expo.version}</Text>
            <View style={styles.errorMessage}>
              <Text style={styles.error}>{errorMsg}</Text>
            </View>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <Icons name="email" color={'white'} size={20}/>
                      <TextInput style={styles.inputBox2}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType="email-address"
                        placeholder="Email"
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                      />
                  </View>
                  <View style={styles.container2}>
                    <Icons name="lock" color={'white'} size={20}/>
                      <TextInput style={styles.inputBox2}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        placeholder="Password"
                        secureTextEntry={hidePass ? true:false}
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                      />
                      <Icon
                        name={hidePass ? 'eye-slash' : 'eye'}
                        color={'white'}
                        size={15}
                        onPress={() => setHidePass(!hidePass)}
                      />
                  </View>
                  <View style={styles.container6}>
                  <TouchableOpacity onPress={handleLogin}>
                    <Text
                      style={styles.button}>
                      Login
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.push("Signup")}>
                    <View style={styles.signupcont}>
                      <Text style={styles.text}>Vous n'avez pas de compte?</Text>
                      <Text style={styles.signuptext}>Sign Up !!</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.push("ResetPwd")}>
                      <View style={styles.signupcont}>
                      <Text style={styles.text}>Mot de passe oublié?</Text>
                      <Text style={styles.signuptext}>Réinitialisez le !!</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>
                  <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@app.xipitei.com?subject=App MES_Bat&body=')}>
                    <Text style={styles.textlien}>Contactez moi : Cliquez ici</Text>
                  </TouchableOpacity>
          </View>
    )
  }

export default SignIn