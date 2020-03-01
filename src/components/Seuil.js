import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

import colors from '../utils/colors'

const Seuil = ({ Value, Title }) => (
    <View>
        <Text style={styles.text1}>{Title}</Text>
        <Text style={styles.text} Length={4}>{Value}</Text>
    </View>
    )
    export default Seuil
    
    const styles = StyleSheet.create({
        text: {
            width: 110,
            margin: 8,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderWidth: 4,
            borderRadius: 25,
            fontSize : 20,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        text1: {
            width: 110,
            margin: 4,
            paddingHorizontal: 4,
            color: colors.texte,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
    })