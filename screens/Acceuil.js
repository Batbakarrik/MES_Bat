import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Login from './Login'
import colors from '../utils/colors';

export default class Acceuil extends Component {
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.texte}>Paramètres Réseau</Text>
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