import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import colors from '../utils/colors'

const Input = () => (
    <View style={styles.container}>
        <Image style={{ width:70, height:70}}
            source={require('../../assets/icon_512x512_V1_5.png')}/>
    </View>
    )
export default Input
    
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.texte,
        margin: 4,
        textAlign: 'center',
    },
})