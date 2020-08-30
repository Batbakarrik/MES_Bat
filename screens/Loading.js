// import React, { useContext, useEffect } from 'react'
// import { Text, StyleSheet, View, ActivityIndicator, Image} from 'react-native'
// import FirebaseContext from '../src/firebase/context'

// import colors from '../src/utils/colors'

// const Loading = () => {
//   const { user, firebase } = useContext(FirebaseContext)

//   console.log(user)

//   useEffect(() => {
//     // console.log("onAuthStateChanged")
//     firebase.auth.onAuthStateChanged(user => {
//       this.navigation.navigate(user ? "App" : "Auth");

//     });
//   }, [])

//     return (
//       <View style={styles.container}>
//         {/* <Image source={require("../assets/icon.png")} style= {{width: 700,height:800}} resizeMode = "contain"></Image> */}
//         <Text style={styles.text}>Chargement de l'application...</Text>
//         <ActivityIndicator size="large" color="#ffffff"></ActivityIndicator>
//       </View>
//     )
//   }

// export default Loading

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex:1,
//     justifyContent: 'center',
//     alignItems:'center',
//     backgroundColor: colors.background,
//   },
//   text: {
//     margin: 8,
//     paddingHorizontal: 8,
//     color: colors.texte,
//     textAlignVertical: 'center',
//   },
// })
  
import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator} from 'react-native'
import firebase from '../src/firebase'

export default class Loading extends Component {

  // componentDidMount = () => {
  //   firebase.auth.onAuthStateChanged(user => {
  //     this.props.navigation.navigate(user ? "App" : "Auth");
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
})