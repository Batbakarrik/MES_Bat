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
            keyboardType={"decimal-pad"}
        />
    </View>
    )
    export default Input
    
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            borderColor: colors.bordercontainer,
        },
        inputBox: {
            width: 110,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderWidth: 1,
            borderRadius: 25,
            fontSize: 16,
            textAlign: 'center',
        },
        text: {
            width: 110,
            color: colors.texte,
            marginBottom: 10,
            textAlign: 'center',
        },
    })