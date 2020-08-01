import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

import colors from '../utils/colors'

const Info = ({ Title, TitleInfo }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{Title}</Text>
        <Text style={styles.inputBox}>{TitleInfo}</Text>
    </View>
    )
    export default Info
    
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            borderColor: colors.bordercontainer,
        },
        inputBox: {
            width: 110,
            color: colors.texte,
            // borderColor: colors.borderinput,
            // borderWidth: 1,
            // borderRadius: 25,
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