import React from 'react'
import { TextInput, StyleSheet, View, Text} from 'react-native'

import colors from '../utils/colors'

const Input = ({ Value, Change, Placeholder, Length, Title }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{Title}</Text>
        <TextInput style={styles.inputBox}
            onChangeText={Change}
            Value={Value}
            maxLength = {Length}
            placeholder={Placeholder}
            keyboardType={"numeric"}
            cursorColor={'white'}
        />
    </View>
    )
    export default Input
    
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
        },
        inputBox: {
            width: 95,
            color: colors.texte,
            backgroundColor: colors.backgroundinput,
            borderColor: colors.borderinput,
            borderWidth: 1,
            borderRadius: 25,
            fontSize: 16,
            textAlign: 'center',
            padding: 0.5,
            marginLeft: 2,
        },
        text: {
            width: 95,
            color: colors.texte,
            marginBottom: 10,
            textAlign: 'center',
        },
    })