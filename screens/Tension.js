import React, { useState, useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Picker } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import Seuil from '../src/components/Seuil'


const Tension = () => {
    const [seuil_U, setseuil_U] = useState(0);
    const [seuil_V, setseuil_V] = useState(0);
    const [prim_U, setprim_U] = useState(0);
    const [second_U, setsecond_U] = useState(0);
    // const [calc_seuilU, setcalc_seuilU] = useState(0);
    const [coef_U, setcoef_U] = useState(0);
    const [inj_U, setinj_U] = useState(0);
    const [inj_V, setinj_V] = useState(0);

    const calc_USimple = () => {
        seuil_U(prim_U/1.732)
    };
    const calc_seuilU = () => {
        seuil_U(prim_U/1.732)
    };

    useEffect(() => {
        setcoef_U(second_U / prim_U.Value)},[prim_U, second_U]);

         return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.text2}>Caractéristiques TP</Text>
                        <View style={styles.container1}>
                            <Input Title="Primaire TP" Change={setprim_U} Value={prim_U} Length={6} Placeholder="Entrez Valeur (V)"/>
                            <View style={styles.container2}>
                            <Text style={styles.text1}>Secondaire TP</Text>
                                <View style={styles.text4}>
                                    <Picker
                                        mode = "dropdown"
                                        selectedValue = {second_U}
                                        onValueChange = {setsecond_U}
                                        style = {styles.text3}>
                                        <Picker.Item label = "100V" value ="100"/>
                                        <Picker.Item label = "110V" value ="110"/>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                </View>
                <View style={styles.container1}>
                    <Input Title="Seuil V" Change={setseuil_V} Value={seuil_V} Length={6} Placeholder="Entrez Valeur (V)"/>
                    <View style={styles.container2}>
                        <Seuil Title="Injecter" Value={inj_V.toFixed(2)}/>
                    </View>
                </View>
                <View style={styles.container1}>
                    <Input Title="Seuil U" Change={setseuil_U} Value={seuil_U} Length={6} Placeholder="Entrez Valeur (U)"/>
                    <View style={styles.container2}>
                        <Seuil Title="Injecter" Value={inj_U.toFixed(2)}/>
                    </View>
                </View>
                <View style={styles.container1}>
                    <TouchableOpacity style={{activeOpacity:2}} onPress={calc_seuilU}>
                        <Text style={styles.button}>Calculer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
};

    export default Tension

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingTop: 30,
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