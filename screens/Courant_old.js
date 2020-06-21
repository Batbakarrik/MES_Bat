import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Picker } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import InputSeuil from '../src/components/InputSeuil'
import Injecter from '../src/components/Injecter'

export default class Courant extends Component{
    static navigationOptions = {
        title: 'Courant',
      }

    render () {
        const {seuil_I, setSeuil_I, setPrim_I, setSecond_I, prim_I, second_I, calc_seuilI, calc_seuilISIT,calc_seuilIVIT, calc_seuilIEIT, inj_I, inj_I1, inj_I2, curve, setCurve, k, setk, temps1, temps2, temps3, seuil_Ix1, seuil_Ix2, seuil_Ix3, setSeuil_Ix1, setSeuil_Ix2, setSeuil_Ix3} =  this.props.screenProps
            return (
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.text2}>Caractéristiques TC</Text>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Input Title="Primaire TC" Change={setPrim_I} Value={prim_I} Length={4} Placeholder="Entrez Valeur"/>
                            </View>
                            <View style={styles.container2}>
                            <Text style={styles.text1}>Secondaire TC</Text>
                                <View style={styles.text4}>
                                    <Picker
                                        mode = "dropdown"
                                        selectedValue = {second_I}
                                        onValueChange = {setSecond_I}
                                        style = {styles.text3}>
                                        <Picker.Item label = "5A" value ="5"/>
                                        <Picker.Item label = "1A" value ="1"/>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.text2}>Paramétrage des seuils</Text>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Text style={styles.text1}>Choix courbe Décl.</Text>
                                <View style={styles.text4}>
                                    <Picker
                                        mode = "dropdown"
                                        selectedValue = {curve}
                                        onValueChange = {setCurve}
                                        style = {styles.text3}>
                                        <Picker.Item label = "DT" value = "0"/>
                                        <Picker.Item label = "CEI SIT" value = "1"/>
                                        <Picker.Item label = "CEI VIT" value = "2"/>
                                        <Picker.Item label = "CEI EIT" value = "3"/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.container2}>
                                <Input Title="I_Seuil (A)" Change={setSeuil_I} Valeur={seuil_I} Length={4} Placeholder="Entrez Seuil"/>
                            </View>
                            <View style={styles.container2}>
                                {curve !== '0'? <Input Title="Seuil k" Change={setk} Valeur={k} Length={4} Placeholder="Entrez Seuil"/>: null}
                            </View>
                        </View>
                    </View>
                    <Text style={styles.text2}>Résultats</Text>
                    <View style={styles.container1}>
                        <InputSeuil seuil_Ix1={seuil_Ix1} setSeuil_Ix1={setSeuil_Ix1} seuil_Ix2={seuil_Ix2} setSeuil_Ix2={setSeuil_Ix2} seuil_Ix3={seuil_Ix3} setSeuil_Ix3={setSeuil_Ix3} curve={curve}/>
                        <Injecter Title1="0.95 x Is" Title1b="x Is" inj1={inj_I} Title2="1 x Is" Title2b="x Is" inj2={inj_I1} Title3="1.1 x Is" Title3b="x Is" inj3={inj_I2} curve={curve}/>
                        {curve === '0'? null : <Injecter Title1="x1" Title1b="tps (s)" inj1={temps1} Title2="x2" Title2b="tps (s)" inj2={temps2} Title3="x3" Title3b="tps (s)" inj3={temps3} curve={curve}/>}
                    </View>
                    <View style={styles.container1}>
                        {curve=='0' ?
                            <TouchableOpacity
                                style={{activeOpacity:2}}
                                onPress={calc_seuilI}
                            >
                            <Text style={styles.button}>Calculer</Text>
                            </TouchableOpacity>:
                            curve == '1' ?
                                <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilISIT}
                                >
                                <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '2' ?
                                <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilIVIT}
                                >
                                <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '3' ?
                                <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilIEIT}
                                >
                                <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>: null
                    }
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.bordercontainer,
        borderRadius: 10,
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
        // margin: 0,
        // paddingHorizontal: 0,
        color: colors.texte,
        textAlign: 'center',
        // textAlignVertical: 'center',
    },
    text2: {
        fontSize: 20,
        paddingBottom: 8,
        paddingTop: 8,
        color: colors.texte,
        textAlignVertical: 'center',
    },
    text3: {
        width: 120,
        color: colors.texte,
    },
    text4: {
        width: 120,
        height: 45,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 0,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})