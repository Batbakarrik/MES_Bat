import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'

import styles from '../src/utils/styles'
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

    const calc_TpsTh = () => {
        setTps(constTps*(Math.log1p((Math.pow((I/(k*InOb)),2))/((Math.pow((I/(k*InOb)),2))-1)-1)))
    }
    const calc_TpsThPr = () => {
        setTpspre(constTps*(Math.log1p(((Math.pow((I/(k*InOb)),2))-(Math.pow((Ipre/(k*InOb)),2)))/((Math.pow((I/(k*InOb)),2))-1)-1)))
    }

         return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Valeurs de réglage</Text>
                    </View> 
                    <View style={styles.container5}>
                        <View style={styles.container6}>
                                <Input Title="Coef K" Change={setk} Value={k} Length={3} Placeholder="Valeur !"/>
                        </View>
                        <View style={styles.container6}>
                                <Input Title="I_Injecté" Change={setI} Value={I} Length={4} Placeholder="Valeur !"/>
                        </View>
                        <View style={styles.container6}>
                                <Input Title="InOb" Change={setInOb} Value={InOb} Length={4} Placeholder="Valeur !"/>
                        </View>
                        <View style={styles.container6}>
                                <Input Title="constTps" Change={setconstTps} Value={constTps} Length={4} Placeholder="Valeur !"/>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Résultats sans Précharge</Text>
                    </View>
                    <View style={styles.container5}>
                        <View style={styles.container6}>
                            <View style={styles.container6}>
                                <TouchableOpacity style={{activeOpacity:2}} onPress={calc_TpsTh}>
                                    <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Seuil Title="Tps de déclench (Min)" Value={Tps.toFixed(2)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Résultats Avec Précharge</Text>
                    </View>
                        <View style={styles.container6}>
                            <Text style={styles.text1}>Courant Précharge</Text>
                            <View style={styles.container7}>
                                <Input Title="" Change={setIpre} Value={Ipre} Length={4} Placeholder="Valeur !"/>
                            </View>
                        </View>
                    <View style={styles.container5}>
                        <View style={styles.container6}>
                            <View style={styles.container6}>
                                <TouchableOpacity style={{activeOpacity:2}} onPress={calc_TpsThPr}>
                                    <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Seuil Title="Tps de déclench (Min)" Value={Tpspre.toFixed(2)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
};

    export default Thermique