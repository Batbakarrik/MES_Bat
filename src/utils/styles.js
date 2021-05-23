import {StyleSheet} from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems:'center',
      backgroundColor: colors.background,
      minHeight: 664,
    },
    container1: {
      display: 'flex',
      flex: 1,
      height: 'auto',
      flexDirection: 'column',
    },
    container2: {
      display: 'flex',
      alignItems:'center',
      flexDirection: 'row',
      paddingLeft: 8,
      margin: 4,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
      width: 270
    },
    container3: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    container4: {
      width: 350,
      marginTop: 8,
      paddingBottom: 4,
      alignItems: 'center',
      borderRadius: 10,
      borderTopWidth: 1,
      borderColor: colors.bordercontainer,
    },
    container5:{
      display: 'flex',
      flexDirection: 'row',
    },
    container6: {
      alignItems: 'center',
    },
    container7: {
      paddingBottom: 4,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    container8: {
      display: 'flex',
      flex: 0.04,
      flexDirection: 'column',
      alignItems:'center',
      padding: 4,
      marginVertical: 0,
      marginHorizontal: 4,
      borderWidth: 0.2,
      backgroundColor: colors.backgroundinput,
      borderColor: colors.bordercontainer,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.background,
      padding: 1,
      marginVertical: 1,
      marginHorizontal: 2,
      borderWidth: 0.2,
      borderColor: colors.bordercontainer,
      minWidth: 250
    },
    item0: {
      backgroundColor: colors.backgroundinput,
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 8,
      borderWidth: 0.2,
      borderColor: colors.bordercontainer,
      width: 375,
    },
    item1: {
      borderColor: colors.bordercontainer,
    },
    item1a: {
      backgroundColor: colors.backgroundinput,
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginVertical: 0,
      width: 100
    },
    item1c: {
      backgroundColor: colors.backgroundinput,
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginVertical: 0,
      width: 65
    },
    item2: {
      flexDirection: 'row',
      borderColor: colors.bordercontainer
    },
    item2a: {
      flexDirection: 'row',
      backgroundColor: colors.background,
    },
    item2b: {
      flexDirection: 'row',
      backgroundColor: colors.background,
    },
    item2c: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      padding: 16,
    },
    item3: {
      borderColor: colors.bordercontainer,
      width: 90
    },
    item3a: {
      backgroundColor: colors.background,
      width: 90
    },
    item3b: {
      backgroundColor: colors.background,
      width: 120
    },
    item3c: {
      backgroundColor: colors.background,
      width: 122
    },
    item4: {
      backgroundColor: colors.background,
      textAlign: 'center',
      width: 60
    },
    // inputBox: {
    //   width: 100,
    //   paddingHorizontal: 0,
    //   margin: 0,
    //   color: colors.texte,
    // },

    searchBox: {
      width: 200,
      height: 30,
      color: colors.texte,
      backgroundColor: colors.backgroundinput,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
      fontSize: 16,
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: 0.5,
      marginLeft: 2,
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
      paddingVertical: 8,
      marginTop: 4,
      marginBottom:4,
      backgroundColor: colors.buttonlogin,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
      color: colors.texte,
      textAlign: 'center',
    },
    button1: {
      width: 300,
      margin: 8,
      fontSize: 25,
      paddingHorizontal: 8,
      backgroundColor: colors.button,
      borderColor: colors.borderinput,
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
    text1: {
      width: 150,
      color: colors.texte,
      textAlign: 'center',
    },
    text2: {
      fontSize: 20,
      paddingBottom: 8,
      paddingTop: 8,
      color: colors.texte,
      textAlignVertical: 'center',
    },
    text3: {
      width: 110,
      color: colors.texte,
    },
    text4: {
      width: 80,
      height: 45,
      color: colors.texte,
      borderColor: colors.borderinput,
      borderWidth: 0,
      borderRadius: 25,
      textAlignVertical: 'center',
    },
    text5: {
      margin: 8,
      paddingHorizontal: 8,
      color: colors.texte,
      justifyContent: 'center',
      textAlignVertical: 'center',
      textAlign: 'center'
    },
    text6: {
      width: 95,
      color: colors.texte,
      marginBottom: 10,
      textAlign: 'center',
    },
    textlien: {
      margin: 8,
      paddingHorizontal: 8,
      color: colors.texte,
      textAlignVertical: 'center',
    },
    signupcont: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    signuptext: {
      paddingHorizontal: 8,
      paddingVertical: 8,
      color: colors.signuptext,
      textAlignVertical: 'center',
    },
    accounttext: {
      paddingHorizontal: 8,
      color: colors.accounttext,
      textAlignVertical: 'center',
    },
    errMessage: {
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
    },
    title: {
      fontSize: 18,
      color: colors.texte,
      textAlign: 'center'
    },
    titlea: {
      fontSize: 14,
      color: colors.texte,
      textAlign: 'center'
    },
    title1: {
      fontSize: 14,
      color: colors.signuptext,
      textAlign: 'center'
    },
    pickerAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputBox: {
      width: 95,
      height: 30,
      color: colors.texte,
      backgroundColor: colors.backgroundinput,
      borderColor: colors.borderinput,
      borderWidth: 1,
      borderRadius: 25,
      fontSize: 16,
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: 0.5,
      marginLeft: 2,
  },
    inputBox2: {
      width: 200,
      paddingHorizontal: 8,
      margin: 4,
      color: colors.texte
  },
  })

export default styles