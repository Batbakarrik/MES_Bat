import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Picker} from 'react-native'

import styles from '../src/utils/styles'
import Input from '../src/components/Input'
import InputSeuil from '../src/components/InputSeuil'
import Injecter from '../src/components/Injecter'
import Tempo from '../src/components/Tempo'
import Info from '../src/components/Info'

const Courant = () => {
    
        const [seuil_I, setseuil_I] = useState(0);
        const [prim_I, setprim_I] = useState(0);
        const [seuil_Ip, setseuil_Ip] = useState(0);
        const [second_I, setsecond_I] = useState(5);
        const [curve, setcurve] = useState(0);
        const [k, setk] = useState(0);
        const [seuil_Ix1, setseuil_Ix1] = useState(1.2);
        const [seuil_Ix2, setseuil_Ix2] = useState(1.5);
        const [seuil_Ix3, setseuil_Ix3] = useState(2);
        const [coef_I, setcoef_I] = useState(0);
        const [inj_I1, setinj_I1] = useState(0);
        const [inj_I2, setinj_I2] = useState(0);
        const [inj_I3, setinj_I3] = useState(0);
        const [temps1, settemps1] = useState(0);
        const [temps2, settemps2] = useState(0);
        const [temps3, settemps3] = useState(0);
        const [is, setIs] = useState({})

        const calc_seuilI = () => {
            setinj_I1(seuil_I.Value * coef_I * 0.95)
            setinj_I2((seuil_I.Value * coef_I) * 1)
            setinj_I3((seuil_I.Value * coef_I) * 1.1)
        };
        const calc_seuilISIT = () => {
            setinj_I1(((seuil_Ix1 * (seuil_I.Value)) * coef_I))
            setinj_I2(((seuil_Ix2 * (seuil_I.Value)) * coef_I))
            setinj_I3(((seuil_Ix3 * (seuil_I.Value)) * coef_I))
            settemps1(((k.Value)*(0.14/((Math.pow((seuil_Ix1),0.02))-1)))) /* /2.97 */
            settemps2(((k.Value)*(0.14/((Math.pow((seuil_Ix2),0.02))-1))))
            settemps3(((k.Value)*(0.14/((Math.pow((seuil_Ix3),0.02))-1))))
        };
        const calc_seuilIVIT = () => {
            setinj_I1(((seuil_Ix1 * (seuil_I.Value)) * coef_I))
            setinj_I2(((seuil_Ix2 * (seuil_I.Value)) * coef_I))
            setinj_I3(((seuil_Ix3 * (seuil_I.Value)) * coef_I))
            settemps1(((k.Value)*(13.5/((Math.pow((seuil_Ix1),1))-1)))) /* /1.5 */
            settemps2(((k.Value)*(13.5/((Math.pow((seuil_Ix2),1))-1))))
            settemps3(((k.Value)*(13.5/((Math.pow((seuil_Ix3),1))-1))))
        };
        const calc_seuilIEIT = () => {
            setinj_I1(((seuil_Ix1 * (seuil_I.Value)) * coef_I))
            setinj_I2(((seuil_Ix2 * (seuil_I.Value)) * coef_I))
            setinj_I3(((seuil_Ix3 * (seuil_I.Value)) * coef_I))
            settemps1(((k.Value)*(80/((Math.pow((seuil_Ix1),2))-1)))) /* 0.808 */
            settemps2(((k.Value)*(80/((Math.pow((seuil_Ix2),2))-1))))
            settemps3(((k.Value)*(80/((Math.pow((seuil_Ix3),2))-1))))
        };
        const calc_seuilILIT = () => {
            setinj_I1(((seuil_Ix1 * (seuil_I.Value)) * coef_I))
            setinj_I2(((seuil_Ix2 * (seuil_I.Value)) * coef_I))
            setinj_I3(((seuil_Ix3 * (seuil_I.Value)) * coef_I))
            settemps1(((k.Value)*(120/((Math.pow((seuil_Ix1),1))-1))))
            settemps2(((k.Value)*(120/((Math.pow((seuil_Ix2),1))-1))))
            settemps3(((k.Value)*(120/((Math.pow((seuil_Ix3),1))-1))))
        };

        useEffect(() => {
            setprim_I(0)
            setseuil_I(0)
            setseuil_Ip(0)
            setprim_I(0)
            setsecond_I(5)
            setcurve(0)
            setk(0)
            setseuil_Ix1(0)
            setseuil_Ix2(0)
            setseuil_Ix3(0)
            setcoef_I(0)
            setinj_I1(0)
            setinj_I2(0)
            setinj_I3(0)
            settemps1(0)
            settemps2(0)
            settemps3(0)
            setIs(1)
        }, [])
        
        useEffect(() => {
            setcoef_I(second_I / prim_I.Value)
            setseuil_Ip(seuil_I.Value / prim_I.Value)
        }, [prim_I, second_I, seuil_I])

            return (
                    <View style={styles.container}>
                        <View style={styles.container6}>
                            <View style={styles.container4}>
                                <Text style={styles.text2}>Caractéristiques TC</Text>
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Input Title="Primaire TC" Change={(e) => setprim_I({Value:e})} Value={prim_I} Length={4} Placeholder="Valeur (A)"/>
                                </View>
                                <View style={styles.container6}>
                                <Text style={styles.text1}>Secondaire TC</Text>
                                    <View style={styles.text4}>
                                        <Picker
                                            selectedValue = {second_I}
                                            onValueChange = {second_I =>setsecond_I(second_I)}
                                            style = {styles.text3}
                                            >
                                            <Picker.Item label= '5A' value='5'/>
                                            <Picker.Item label= '1A' value='1'/>
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.container6}>
                                    <Info Taille="110" Title="Is/Ip" TitleInfo={coef_I.toFixed(3)}/>
                                </View>
                            </View>
                            <View style={styles.container4}>
                            <Text style={styles.text2}>Paramétrage des seuils</Text>
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Text style={styles.text1}>Choix courbe Décl.</Text>
                                    <View style={styles.text4}>
                                        <Picker
                                            selectedValue = {curve}
                                            onValueChange = {newcurve =>setcurve(newcurve)}
                                            style = {styles.text3}>
                                            <Picker.Item label = "DT" value = "0"/>
                                            <Picker.Item label = "SIT CEI" value = "1"/>
                                            <Picker.Item label = "VIT CEI" value = "2"/>
                                            <Picker.Item label = "EIT CEI" value = "3"/>
                                            <Picker.Item label = "LIT CEI" value = "4"/>
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.container6}>
                                    <Input Title="Seuil I" Change={(e) => setseuil_I({Value:e})} Valeur={seuil_I} Length={4} Placeholder="Valeur (A)"/>
                                </View>
                                <View style={styles.container6}>
                                    {curve == '0'? null : <Input Title="Coef k" Change={(e) => setk({Value:e})} Valeur={k} Length={5} Placeholder="Valeur !"/>}
                                </View>
                                <View style={styles.container6}>
                                    {curve == '0'? <Info Taille="110" Title="" TitleInfo={ seuil_Ip.toFixed(3) +" xIn"}/> : null}
                                </View>
                            </View>
                        </View>
                        <View style={styles.container4}>
                        <Text style={styles.text2}>Résultats</Text>
                        </View>
                        <View style={styles.container5}>
                            {curve =='0' ?
                                <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilI}
                                >
                                <Text style={styles.button1}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '1' ?
                                <TouchableOpacity
                                style={{activeOpacity:2}}
                                    onPress={calc_seuilISIT}
                                >
                                <Text style={styles.button1}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '2' ?
                                <TouchableOpacity
                                style={{activeOpacity:2}}
                                    onPress={calc_seuilIVIT}
                                    >
                                <Text style={styles.button1}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '3' ?
                                <TouchableOpacity
                                style={{activeOpacity:2}}
                                    onPress={calc_seuilIEIT}
                                    >
                                <Text style={styles.button1}>Calculer</Text>
                                </TouchableOpacity>:
                            curve == '4' ?
                            <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilILIT}
                                >
                                <Text style={styles.button1}>Calculer</Text>
                                </TouchableOpacity>: null
                            }
                        </View>
                        <View style={styles.container5}>
                            {curve == '0'? null : <InputSeuil seuil_Ix1={seuil_Ix1} setseuil_Ix1={setseuil_Ix1} seuil_Ix2={seuil_Ix2} setseuil_Ix2={setseuil_Ix2} seuil_Ix3={seuil_Ix3} setseuil_Ix3={setseuil_Ix3} curve={curve}/>}
                            <Injecter Title1="0.95 x Is" Title1b="I_1 à Inj" inj1={inj_I1} Title2="1 x Is" Title2b="I_2 à Inj" inj2={inj_I2} Title3="1.1 x Is" Title3b="I_3 à Inj" inj3={inj_I3} curve={curve}/>
                            {curve == '0'? null : <Tempo Title1="x1" Title1b="tps_1" inj1={temps1} Title2="x2" Title2b="tps_2" inj2={temps2} Title3="x3" Title3b="tps_3" inj3={temps3} curve={curve}/>}
                        </View>
                        <View style={styles.container5}>

                        </View>
                    </View>
                )
        };

        export default Courant
