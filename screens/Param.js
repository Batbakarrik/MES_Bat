import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'


export default class Param extends Component {

        render() {
            const {prim_I, second_I, prim_U, second_U, prim_I0, second_I0, prim_I00, second_I00, seuil_I, seuil_U, seuil_I0, seuil_I00, setPrim_I, setSecond_I, setPrim_U, setSecond_U, setPrim_I0, setSecond_I0, setPrim_I00, setSecond_I00, setSeuil_I, setSeuil_U, setSeuil_I0, setSeuil_I00} = this.props.screenProps
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TC" Change={setPrim_I} Valeur={prim_I} Length={4} Placeholder="Entrez Valeur (A)"/>
                        <Input Titre="Secondaire TC" Change={setSecond_I} Valeur={second_I} Length={1} Placeholder="Entrez Valeur (A)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TP" Change={setPrim_U} Valeur={prim_U} Length={6} Placeholder="Entrez Valeur (V)"/>
                        <Input Titre="Secondaire TP" Change={setSecond_U} Valeur={second_U} Length={3} Placeholder="Entrez Valeur (V)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire Tore1" Change={setPrim_I0} Valeur={prim_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <Input Titre="Secondaire Tore1" Change={setSecond_I0} Valeur={second_I0} Length={1} Placeholder="Entrez Valeur (I0)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire Tore2" Change={setPrim_I00} Valeur={prim_I00} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <Input Titre="Secondaire Tore2" Change={setSecond_I00} Valeur={second_I00} Length={1} Placeholder="Entrez Valeur (I0)"/>
                    </View>
                        <View style={styles.container1}>
                            <Input Titre="Seuil I" Change={setSeuil_I} Valeur={seuil_I} Length={4} Placeholder="Entrez Seuil (I)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.props.screenProps.inj_I.toFixed(2)}</Text>
                        </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={setSeuil_U} Valeur={seuil_U} Length={6} Placeholder="Entrez Valeur (U)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.props.screenProps.inj_U.toFixed(2)}</Text>
                            </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={setSeuil_I0} Valeur={seuil_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.props.screenProps.inj_I0.toFixed(2)}</Text>
                            </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={setSeuil_I00} Valeur={seuil_I00} Length={4} Placeholder="Entrez Valeur (I0)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.props.screenProps.inj_I00.toFixed(2)}</Text>
                        </View>
                    <View style={styles.container1}>
                            <TouchableOpacity>
                                <Text
                                    style={styles.button}
                                    onPress={this.props.screenProps.calc_coef}>
                                Calculer coef
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text
                                    style={styles.button}
                                    onPress={this.props.screenProps.calc_seuil}>
                                Calculer Inj
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
        width: 70,
        margin: 4,
        paddingHorizontal: 8,
        color: colors.texte,
        // borderColor: colors.borderinput,
        // borderWidth: 1,
        // borderRadius: 25,
        textAlignVertical: 'center',
    },
    text1: {
        width: 70,
        margin: 8,
        paddingHorizontal: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})
