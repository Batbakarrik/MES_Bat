import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import colors from '../utils/colors'

const Input = ({ Titre }) => (
    <View style={styles.container}>
        <Image style={{ width:70, height:70}}
            source={require('../image/490-svg.png')}/>
    </View>
    )
export default Input
    
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.texte,
        margin: 4,
        textAlign: 'center',
    },
})