import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Login from './Login'
import colors from '../src/utils/colors';

export default class Acceuil extends Component {
    render(){
        return (
          <View style={styles.container}>
            <Login/>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    texte:{
        color: colors.titre,
        paddingVertical: 16,
    },
})