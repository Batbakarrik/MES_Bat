import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'

export default class Calcul1 extends Component{

    render () {
        const {seuil_I, seuil_U, inj_I, inj_U, calc_seuil} =  this.props
        console.log(seuil_I)
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Seuil (A)" Change={(seuil_I) => this.setState({seuil_I})} Valeur={seuil_I} Length={5} Placeholder="Entrez Valeur (A)"/>
                        <Text style={styles.text}>{inj_I}</Text>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil (V)" Change={(seuil_U) => this.setState({seuil_U})} Valeur={seuil_U} Length={5} Placeholder="Entrez Valeur (V)"/>
                        <Text style={styles.text}>{inj_U}</Text>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity>
                            <Text
                                style={styles.button}
                                onPress={calc_seuil}>
                            Calculer
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    container1: {
        flexDirection: 'row',
        borderColor: colors.borderinput,
        borderRadius: 25,
    },
    inputBox: {
        width: 100,
        paddingHorizontal: 8,
        margin: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderRadius: 25,
    },
    button: {
        width: 100,
        margin: 8,
        paddingHorizontal: 8,
        backgroundColor: colors.button,
        borderColor: colors.borderinput,
        borderRadius: 25,
        color: colors.texte,
        textAlign: 'center',
    },
    text: {
        width: 100,
        margin: 8,
        paddingHorizontal: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})