import React from 'react'
import { TextInput, StyleSheet, View, Text} from 'react-native'

import colors from '../utils/colors'

const Input = ({ Valeur, Change, Placeholder, Length, Titre }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{Titre}</Text>
        <TextInput style={styles.inputBox}
            onChangeText={Change}
            Value={Valeur}
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
            // borderTopWidth: 1,
            // borderBottomWidth: 1,
        },
        inputBox: {
            width: 150,
            paddingHorizontal: 8,
            margin: 8,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderWidth: 1,
            borderRadius: 25,
        },
        text: {
            width: 150,
            color: colors.texte,
            margin: 4,
            textAlign: 'center',
        },
    })