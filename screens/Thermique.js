import React, { useState, useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import Seuil from '../src/components/Seuil'

const Thermique = () => {
    const [k, setk] = useState(0);
    const [I, setI] = useState(0);
    const [InOb, setInOb] = useState(0);
    const [Ipre, setIpre] = useState(0);
    const [constTps, setconstTps] = useState(0);
    const [Tps, setTps] = useState(0);
    const [Tpspre, setTpspre] = useState(0);
    // const [Iperch, setIperch] = useState(0);

    const calc_TpsTh = () => {
        setTps(constTps*(Math.log1p((Math.pow((I/(k*InOb)),2))/((Math.pow((I/(k*InOb)),2))-1)-1)))
    }
    const calc_TpsThPr = () => {
        setTpspre(constTps*(Math.log1p(((Math.pow((I/(k*InOb)),2))-(Math.pow((Ipre/(k*InOb)),2)))/((Math.pow((I/(k*InOb)),2))-1)-1)))
    }

    // useEffect(() => {
    //     setTps()
    // },[k, InOb, constTps, Tps]);

         return (
            <View style={styles.container}>
                <View style={styles.container4}>
                    <Text style={styles.text2}>Valeurs de réglage</Text>
                </View> 
                <View style={styles.container1}>
                    <View style={styles.container2}>
                            <Input Title="Coef K" Change={setk} Value={k} Length={3} Placeholder="Valeur !"/>
                    </View>
                    <View style={styles.container2}>
                            <Input Title="I_Injecté" Change={setI} Value={I} Length={3} Placeholder="Valeur !"/>
                    </View>
                    <View style={styles.container2}>
                            <Input Title="InOb" Change={setInOb} Value={InOb} Length={3} Placeholder="Valeur !"/>
                    </View>
                    <View style={styles.container2}>
                            <Input Title="constTps" Change={setconstTps} Value={constTps} Length={4} Placeholder="Valeur !"/>
                    </View>
                </View>

                <View style={styles.container4}>
                    <Text style={styles.text2}>Résultats sans Précharge</Text>
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container2}>
                            <TouchableOpacity style={{activeOpacity:2}} onPress={calc_TpsTh}>
                                <Text style={styles.button}>Calculer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Seuil Title="Tps de déclench (Min)" Value={Tps.toFixed(2)}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text2}>Résultats Avec Précharge</Text>
                </View>
                    <View style={styles.container2}>
                        <Text style={styles.text1}>Courant Précharge</Text>
                        <View style={styles.container3}>
                            <Input Title="" Change={setIpre} Value={Ipre} Length={4} Placeholder="Valeur !"/>
                        </View>
                    </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container2}>
                            <TouchableOpacity style={{activeOpacity:2}} onPress={calc_TpsThPr}>
                                <Text style={styles.button}>Calculer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Seuil Title="Tps de déclench (Min)" Value={Tpspre.toFixed(2)}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
};

    export default Thermique

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingTop: 25,
        alignItems: 'center',
        backgroundColor: colors.background
    },
    container1: {
        flexDirection: 'row',
    },
    container2: {
        alignItems: 'center',
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