import React, { useState, useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Picker } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import Seuil from '../src/components/Seuil'
import Info from '../src/components/Info'


const Tension = () => {
    const [seuil_U, setseuil_U] = useState(0);
    const [seuil_V, setseuil_V] = useState(0);
    const [seuil_Up, setseuil_Up] = useState(0);
    const [prim_U, setprim_U] = useState(0);
    const [second_U, setsecond_U] = useState(100);
    const [coef_U, setcoef_U] = useState(0);
    const [inj_Uc, setinj_Uc] = useState(0);
    const [inj_Us, setinj_Us] = useState(0);

    const calc_seuilU = () => {
        setinj_Uc(seuil_U * coef_U)
        setinj_Us((seuil_U * coef_U)/1.732)
    };

    useEffect(() => {
        setcoef_U(second_U / prim_U)
        setseuil_Up((seuil_U/prim_U)*100)
        setseuil_V(prim_U/1.732)
    },[prim_U, second_U, seuil_U]);

    // console.log({prim_U, second_U, seuil_U, coef_U})

         return (
            <View style={styles.container}>
                <View style={styles.container4}>
                    <Text style={styles.text2}>Caractéristiques TP</Text>
                </View> 
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container3}>
                            <Input Title="Primaire TP" Change={setprim_U} Value={prim_U} Length={6} Placeholder="Valeur !"/>
                        </View>
                        <View style={styles.container3}>
                            <Info Title="U simple" TitleInfo={seuil_V.toFixed(0)+" V"}/>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.text1}>Secondaire TP</Text>
                        <View style={styles.text4}>
                            <Picker
                                mode = "dropdown"
                                selectedValue = {second_U}
                                onValueChange = {newsecond_U =>setsecond_U(newsecond_U)}
                                style = {styles.text3}>
                                <Picker.Item label = "100V" value ="100"/>
                                <Picker.Item label = "110V" value ="110"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <Info Title="Coef_Us/Up" TitleInfo={coef_U}/>
                    </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text2}>Paramètre du seuil a calculer</Text>
                </View>
                <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Input Title="Seuil U" Change={setseuil_U} Value={seuil_U} Length={6} Placeholder="Valeur !"/>
                            </View>
                            <View style={styles.container2}>
                                <Info Title=" " TitleInfo={seuil_Up+" %Un"}/>
                            </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text2}>Résultats</Text>
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container2}>
                            <TouchableOpacity style={{activeOpacity:2}} onPress={calc_seuilU}>
                                <Text style={styles.button}>Calculer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Seuil Title="Inj_U Comp." Value={inj_Uc.toFixed(2)}/>
                            </View>
                            <View style={styles.container2}>
                                <Seuil Title="Inj_U Simple" Value={inj_Us.toFixed(2)}/>
                            </View>
                        </View>
                    </View>
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
        backgroundColor: colors.background
    },
    container1: {
        flexDirection: 'row',
    },
    container2: {
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    container3: {
        paddingBottom: 4,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    container4: {
        width: 350,
        marginTop: 8,
        paddingBottom: 4,
        alignItems: 'center',
        borderRadius: 10,
        borderTopWidth: 1,
        borderColor: colors.bordercontainer,
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