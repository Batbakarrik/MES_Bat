import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'

export default class Calcul1 extends Component{
    static navigationOptions = {
        title: 'Calcul1'
    }

    render () {
        const {seuil_I, seuil_U, seuil_I0, seuil_I00, setSeuil_I, setSeuil_U, setSeuil_I0, setSeuil_I00, calc_seuil, inj_U, inj_I, inj_I0, inj_I00} =  this.props.screenProps
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Seuil I" Change={setSeuil_I} Valeur={seuil_I} Length={4} Placeholder="Entrez Seuil (I)"/>
                        <Text style={styles.text} Length={4}>{inj_I}</Text>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil U" Change={setSeuil_U} Valeur={seuil_U} Length={6} Placeholder="Entrez Valeur (U)"/>
                        <Text style={styles.text}>{inj_U}</Text>
                        </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil I0" Change={setSeuil_I0} Valeur={seuil_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <Text style={styles.text}>{inj_I0}</Text>
                        </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil I00" Change={setSeuil_I00} Valeur={seuil_I00} Length={4} Placeholder="Entrez Valeur (I0')"/>
                        <Text style={styles.text}>{inj_I00}</Text>
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
        console.log(inj_I)
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
        borderTopWidth: 5,
        borderColor: colors.borderinput,
        borderRadius: 10,
        borderBottomWidth: 1,
    },
    container2: {
        justifyContent: 'center',
        // borderColor: colors.bordercontainer,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
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
        width: 300,
        margin: 8,
        fontSize: 25,
        paddingHorizontal: 8,
        backgroundColor: colors.button,
        borderColor: colors.borderinput,
        borderRadius: 25,
        color: colors.texte,
        textAlign: 'center',
    },
    text: {
        width: 150,
        margin: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlign: 'center',
    },
    text1: {
        width: 70,
        margin: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})