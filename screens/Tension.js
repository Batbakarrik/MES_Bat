import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Picker } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'

export default class Tension extends Component{
    static navigationOptions = {
        title: 'Tension'
    }

    render () {
        const {seuil_U, setSeuil_U, setPrim_U, setSecond_U, prim_U, second_U, calc_seuil, inj_U } =  this.props.screenProps
            return (
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.text2}>Caractéristiques TP</Text>
                        <View style={styles.container1}>
                            <Input Titre="Primaire TP" Change={setPrim_U} Valeur={prim_U} Length={6} Placeholder="Entrez Valeur (V)"/>
                            <View style={styles.container2}>
                            <Text style={styles.text}>Secondaire TP</Text>
                                <View style={styles.text4}>
                                    <Picker
                                        mode = "dropdown"
                                        selectedValue = {second_U}
                                        onValueChange = {setSecond_U}
                                        style = {styles.text3}>
                                        <Picker.Item label = "100V" value ="100"/>
                                        <Picker.Item label = "110V" value ="110"/>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil U" Change={setSeuil_U} Valeur={seuil_U} Length={6} Placeholder="Entrez Valeur (U)"/>
                        <View style={styles.container2}>
                            <Text style={styles.text1}>Injecter</Text>
                            <Text style={styles.text}>{inj_U.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity style={{activeOpacity:2}} onPress={calc_seuil}>
                            <Text style={styles.button}>Calculer</Text>
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
        borderTopWidth: 5,
        borderColor: colors.borderinput,
        borderRadius: 10,
        borderBottomWidth: 1,
    },
    container2: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.background,
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
        borderWidth: 4,
        borderRadius: 25,
        fontSize : 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    text1: {
        width: 150,
        margin: 4,
        paddingHorizontal: 4,
        color: colors.texte,
        // borderColor: colors.borderinput,
        // borderWidth: 1,
        // borderRadius: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    text2: {
        // width: 70,
        fontSize: 20,
        paddingHorizontal: 8,
        color: colors.texte,
        textAlignVertical: 'center',
    },
    text3: {
        width: 120,
        marginLeft: 20,
        color: colors.texte,
    },
    text4: {
        width: 150,
        height: 45,
        paddingLeft: 10,
        borderWidth:1,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})