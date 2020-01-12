import React from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import colors from '../utils/colors'

const Form = (handleLogin) => (
    <View style={styles.container}>
        <TextInput style={styles.inputBox}
            placeholder="Name"
        />
        <TextInput style={styles.inputBox}
            placeholder="Email"
        />
        <TextInput style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.handleLogin}>
            <Text
                style={styles.button}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
    )
    export default Form
    
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputBox: {
            width: 250,
            paddingHorizontal: 16,
            margin: 8,
            backgroundColor: colors.backgroundinput,
            borderColor: colors.borderinput,
            borderWidth: 1,
            borderRadius: 25,
            color: colors.texte,
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
    })