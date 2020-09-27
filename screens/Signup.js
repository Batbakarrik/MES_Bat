import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image} from 'react-native'
import { FirebaseContext } from '../src/firebase'
import { Ionicons } from '@expo/vector-icons'

import Logo from '../src/components/Logo'
import styles from '../src/utils/styles'

const SignUp = ({ navigation }) => {
  const {firebase} = useContext(FirebaseContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignup = () => {
    firebase.signUp(email, password, name)
  }

    return (
      <View style={styles.container}>
        <Image source={require("../assets/authHeader_MES_Bat.png")} style= {{position:"absolute", top: 200, right: 40}}>
        </Image>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.text}> Veuillez remplir les champs </Text>
        <Logo/>
        <View style={styles.errorMessage}>
          {/* {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>} */}
        </View>
        <View style={styles.container1}>
          {/* <Form> */}
            <View style={styles.container2}>
              <Ionicons name="ios-person-add" color={'white'} size={24}></Ionicons>
              <TextInput style={styles.inputBox}
                  placeholder="name"
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
          {/* </Form> */}
        </View>
        {/* <View style={styles.signupcont}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.accounttext}>Don't have an account yet?</Text>
            <Text style={styles.signuptext}>Login!!</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    )
  }

export default SignUp

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex:1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems:'center',
//     backgroundColor: colors.background,
//   },
//   container1: {
//     display: 'flex',
//     flex:1,
//     flexDirection: 'column',
//   },
//   container2: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems:'center',
//     flexDirection: 'row',
//     paddingLeft: 5,
//     margin: 5,
//     borderColor: colors.borderinput,
//     borderWidth: 1,
//     borderRadius: 25,
//   },
//   inputBox: {
//     width: 200,
//     paddingHorizontal: 8,
//     margin: 4,
//     color: colors.texte,
//   },
//   inputBox1: {
//       width: 100,
//       paddingHorizontal: 8,
//       margin: 8,
//       color: colors.texte,
//       borderColor: colors.borderinput,
//       borderRadius: 25,
//   },
//   button: {
//     width: 250,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     margin: 8,
//     backgroundColor: colors.buttonlogin,
//     borderColor: colors.borderinput,
//     borderWidth: 1,
//     borderRadius: 25,
//     color: colors.texte,
//     textAlign: 'center',
//   },
//   text: {
//       margin: 8,
//       paddingHorizontal: 8,
//       color: colors.texte,
//       justifyContent: 'center',
//       textAlignVertical: 'center',
//   },
//   signupcont: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   signuptext: {
//     paddingHorizontal: 8,
//     color: colors.signuptext,
//     textAlignVertical: 'center',
//   },
//   accounttext: {
//     paddingHorizontal: 8,
//     color: colors.accounttext,
//     textAlignVertical: 'center',
//   },
//   errorMessage: {
//     margin: 4,
//     height: 48,
//     color: colors.accounttext,
//     justifyContent: 'center',
//     alignItems:'center',
//   },
//   error: {
//     color: "#E9446A",
//     textAlignVertical: 'center',
//   },
//   back: {
//     position: "absolute",
//     top: 48,
//     left: 42,
//     width: 42,
//     height: 42,
//     borderRadius: 16,
//     backgroundColor: "rgba(21, 22, 48, 0.1)",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })
