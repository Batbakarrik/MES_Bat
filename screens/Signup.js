import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image} from 'react-native'
import {FirebaseContext} from '../src/firebase'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        navigation.push("SignIn")
        alert(
          `\nIncription en cours\n\nVous allez reçevoir un email de validation à ${email}\n\nNota:\n   Si vous ne reçevez pas cet email\n   Consultez vôtre dossier\n   'Courrier indésirable'`,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
        firebase.signUp2(users)
      })


    .catch(error => {
      setError(error)
    });
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
              <Icons name="face" color={'white'} size={20}/>
              <TextInput style={styles.inputBox}
                  placeholder="Name"
                  autoCapitalize="none"
                  value={name}
                  onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={styles.container2}>
              <Icons name="email" color={'white'} size={20}/>
                <TextInput style={styles.inputBox}
                  placeholder="Email"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(val) => setEmail(val)}
                />
            </View>
            <View style={styles.container2}>
              <Icons name="lock" color={'white'} size={20}/>
                <TextInput style={styles.inputBox}
                  placeholder="Password"
                  autoCapitalize="none"
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