import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image} from 'react-native'
import {FirebaseContext} from '../src/firebase'

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Logo from '../src/components/Logo'
import styles from '../src/utils/styles'
import colors from '../src/utils/colors'

const SignUp = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [hidePass, setHidePass] = useState(true)

  const handleSignup = () => {

    const users = {name, email, password}

      firebase.signUp(users)

      .then(userCredentials=> {
        userCredentials.user.sendEmailVerification(),
        userCredentials.user.updateProfile({displayName: name}),
        setName(''),
        setEmail(''),
        setPassword(''),
        alert(
          `\nIncription en cours\n\nVous allez reçevoir un email de validation à ${email}\n\nNota:\n   Si vous ne reçevez pas cet email\n   Consultez vôtre dossier\n   'Courrier indésirable'`,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
          )
        firebase.signUp2(users)
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
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 40}}>
        </Image>
        <Text style={styles.text}> Veuillez remplir les champs </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
        <View style={styles.container1}>
            <View style={styles.container2}>
              <MaterialIcons name="face" color={'white'} size={20}/>
              <TextInput style={styles.inputBox2}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={true}
                  placeholder="Name"
                  value={name}
                  onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={styles.container2}>
              <FontAwesome5 name="envelope" color={'white'} size={20}/>
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
              <FontAwesome5 name="lock" color={'white'} size={20}/>
                <TextInput style={styles.inputBox2}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  autoCorrect={false}
                  placeholder="Password"
                  secureTextEntry={hidePass ? true:false}
                  value={password}
                  onChangeText={(val) => setPassword(val)}
                />
                <Ionicons
                  name={hidePass ? 'ios-eye-off' : 'ios-eye'}
                  color={'white'}
                  size={15}
                  onPress={() => setHidePass(!hidePass)}
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
        </View>
      </View>
    )
}

export default SignUp