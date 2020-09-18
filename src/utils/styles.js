import {StyleSheet} from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: colors.background,
    },
    container1: {
      display: 'flex',
      flex:1,
      flexDirection: 'column',
    },
    container2: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'row',
      paddingLeft: 5,
      margin: 5,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
    },
    inputBox: {
      width: 200,
      paddingHorizontal: 8,
      margin: 4,
      color: colors.texte,
    },
    inputBox1: {
        width: 100,
        paddingHorizontal: 8,
        margin: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderRadius: 25,
    },
    button: {
      width: 250,
      paddingHorizontal: 16,
      paddingVertical: 8,
      margin: 8,
      backgroundColor: colors.buttonlogin,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
      color: colors.texte,
      textAlign: 'center',
    },
    text: {
        margin: 8,
        paddingHorizontal: 8,
        color: colors.texte,
        justifyContent: 'center',
        textAlignVertical: 'center',
    },
    signupcont: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    signuptext: {
      paddingHorizontal: 8,
      color: colors.signuptext,
      textAlignVertical: 'center',
    },
    accounttext: {
      paddingHorizontal: 8,
      color: colors.accounttext,
      textAlignVertical: 'center',
    },
    errorMessage: {
      margin: 4,
      height: 48,
      color: colors.accounttext,
      justifyContent: 'center',
      alignItems:'center',
    },
    error: {
      color: "#E9446A",
      textAlignVertical: 'center',
    },
    back: {
      position: "absolute",
      top: 48,
      left: 42,
      width: 42,
      height: 42,
      borderRadius: 16,
      backgroundColor: "rgba(21, 22, 48, 0.1)",
      alignItems: "center",
      justifyContent: "center"
    }
  })

export default styles