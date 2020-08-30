import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Picker, ScrollView } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import InputSeuil from '../src/components/InputSeuil'
import Injecter from '../src/components/Injecter'
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
        const [inj_I, setinj_I] = useState(0);
        const [inj_I1, setinj_I1] = useState(0);
        const [inj_I2, setinj_I2] = useState(0);
        const [temps1, settemps1] = useState(0);
        const [temps2, settemps2] = useState(0);
        const [temps3, settemps3] = useState(0);

        const calc_seuilI = () => {
            setinj_I(seuil_I.Value * coef_I * 0.95)
            setinj_I1((seuil_I.Value * coef_I) * 1)
            setinj_I2((seuil_I.Value * coef_I) * 1.1)
        };
        const calc_seuilISIT = () => {
            setinj_I((seuil_I.Value * coef_I) * seuil_Ix1)
            setinj_I1((seuil_I.Value * coef_I) * seuil_Ix2)
            setinj_I2((seuil_I.Value * coef_I) * seuil_Ix3)
            settemps1(((k.Value)*(0.14/((Math.pow((seuil_Ix1),0.02))-1)))) /* /2.97 */
            settemps2(((k.Value)*(0.14/((Math.pow((seuil_Ix2),0.02))-1))))
            settemps3(((k.Value)*(0.14/((Math.pow((seuil_Ix3),0.02))-1))))
        };
        const calc_seuilIVIT = () => {
            setinj_I((seuil_I.Value * coef_I) * seuil_Ix1)
            setinj_I1((seuil_I.Value * coef_I) * seuil_Ix2)
            setinj_I2((seuil_I.Value * coef_I) * seuil_Ix3)
            settemps1(((k.Value)*(13.5/((Math.pow((seuil_Ix1),1))-1)))) /* /1.5 */
            settemps2(((k.Value)*(13.5/((Math.pow((seuil_Ix2),1))-1))))
            settemps3(((k.Value)*(13.5/((Math.pow((seuil_Ix3),1))-1))))
        };
        const calc_seuilIEIT = () => {
            setinj_I((seuil_I.Value * coef_I) * seuil_Ix1)
            setinj_I1((seuil_I.Value * coef_I) * seuil_Ix2)
            setinj_I2((seuil_I.Value * coef_I) * seuil_Ix3)
            settemps1(((k.Value)*(80/((Math.pow((seuil_Ix1),2))-1)))) /* 0.808 */
            settemps2(((k.Value)*(80/((Math.pow((seuil_Ix2),2))-1))))
            settemps3(((k.Value)*(80/((Math.pow((seuil_Ix3),2))-1))))
        };
        const calc_seuilILIT = () => {
            setinj_I((seuil_I.Value * coef_I) * seuil_Ix1)
            setinj_I1((seuil_I.Value * coef_I) * seuil_Ix2)
            setinj_I2((seuil_I.Value * coef_I) * seuil_Ix3)
            settemps1(((k.Value)*(120/((Math.pow((seuil_Ix1),1))-1))))
            settemps2(((k.Value)*(120/((Math.pow((seuil_Ix2),1))-1))))
            settemps3(((k.Value)*(120/((Math.pow((seuil_Ix3),1))-1))))
        };
        useEffect(() => {
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
            setinj_I(0)
            setinj_I1(0)
            setinj_I2(0)
            settemps1(0)
            settemps2(0)
            settemps3(0)
        }, [])
        
        useEffect(() => {
            setcoef_I(second_I / prim_I.Value)
            setseuil_Ip(seuil_I.Value / prim_I.Value)
        }, [prim_I, second_I, seuil_I])
        
            return (
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.container2}>
                            <View style={styles.container4}>
                            <Text style={styles.text2}>Caractéristiques TC</Text>
                            </View>
                            <View style={styles.container1}>
                                <View style={styles.container2}>
                                    <Input Title="Primaire TC" Change={(e) => setprim_I({Value:e})} Value={prim_I} Length={4} Placeholder="Valeur !"/>
                                </View>
                                <View style={styles.container2}>
                                <Text style={styles.text1}>Secondaire TC</Text>
                                    <View style={styles.text4}>
                                        <Picker
                                            mode = "dropdown"
                                            selectedValue = {second_I}
                                            onValueChange = {newsecond_I =>setsecond_I(newsecond_I)}
                                            style = {styles.text3}
                                            >
                                            <Picker.Item label = "5A" value ="5"/>
                                            <Picker.Item label = "1A" value ="1"/>
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.container2}>
                                    <Info Title="Coef_Is/Ip" TitleInfo={coef_I.toFixed(3)}/>
                                </View>
                            </View>
                            <View style={styles.container4}>
                            <Text style={styles.text2}>Paramétrage des seuils</Text>
                            </View>
                            <View style={styles.container1}>
                                <View style={styles.container2}>
                                    <Text style={styles.text1}>Choix courbe Décl.</Text>
                                    <View style={styles.text4}>
                                        <Picker
                                            mode = "dropdown"
                                            selectedValue = {curve}
                                            onValueChange = {newcurve =>setcurve(newcurve)}
                                            style = {styles.text3}>
                                            <Picker.Item label = "DT" value = "0"/>
                                            <Picker.Item label = "CEI SIT" value = "1"/>
                                            <Picker.Item label = "CEI VIT" value = "2"/>
                                            <Picker.Item label = "CEI EIT" value = "3"/>
                                            <Picker.Item label = "CEI LIT" value = "4"/>
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.container2}>
                                    {curve == '0'? <Input Title="Seuil I" Change={(e) => setseuil_I({Value:e})} Valeur={seuil_I} Length={4} Placeholder="Valeur !"/> : null}
                                </View>
                                <View style={styles.container2}>
                                    {curve == '0'? null : <Input Title="Coef k" Change={(e) => setk({Value:e})} Valeur={k} Length={5} Placeholder="Valeur !"/>}
                                </View>
                                <View style={styles.container2}>
                                    {curve == '0'? <Info Title="" TitleInfo={ seuil_Ip.toFixed(3) +" xIn"}/> : null}
                                </View>
                            </View>
                        </View>
                        <View style={styles.container4}>
                        <Text style={styles.text2}>Résultats</Text>
                        </View>
                        <View style={styles.container1}>
                            {curve =='0' ?
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
                                </TouchableOpacity>:
                            curve == '4' ?
                            <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={calc_seuilILIT}
                                >
                                <Text style={styles.button}>Calculer</Text>
                                </TouchableOpacity>: null
                            }
                        </View>
                        <View style={styles.container1}>
                            {curve == '0'? null : <InputSeuil seuil_Ix1={seuil_Ix1} setseuil_Ix1={setseuil_Ix1} seuil_Ix2={seuil_Ix2} setseuil_Ix2={setseuil_Ix2} seuil_Ix3={seuil_Ix3} setseuil_Ix3={setseuil_Ix3} curve={curve}/>}
                            <Injecter Title1="0.95 x Is" Title1b="I_1 à Inj" inj1={inj_I} Title2="1 x Is" Title2b="I_2 à Inj" inj2={inj_I1} Title3="1.1 x Is" Title3b="I_3 à Inj" inj3={inj_I2} curve={curve}/>
                            {curve == '0'? null : <Injecter Title1="x1" Title1b="tps_1 (s)" inj1={temps1} Title2="x2" Title2b="tps_2 (s)" inj2={temps2} Title3="x3" Title3b="tps_3 (s)" inj3={temps3} curve={curve}/>}
                        </View>
                        <View style={styles.container1}>

                        </View>
                    </View>
                </ScrollView>
                )
        };

        export default Courant

        
        const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: colors.background,
        minHeight: 750

    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
    },
    container2: {
        display: 'flex',
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