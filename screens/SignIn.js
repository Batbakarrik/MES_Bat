import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../src/firebase'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../src/utils/styles'
import Logo from '../src/components/Logo'

const SignIn = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hidePass, setHidePass] = useState(true)

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
  
  console.log({email})
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