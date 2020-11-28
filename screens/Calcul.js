import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity , Picker } from 'react-native'

import styles from '../src/utils/styles'
import Input from '../src/components/Input'
import Info from '../src/components/Info'

const Calcul = () => {
    
        const [val_1, setval_1] = useState(0);
        const [val_2, setval_2] = useState(0);
        const [val_3, setval_3] = useState(0);
        const [val_4, setval_4] = useState(0);
        const [val_5, setval_5] = useState(0);
        const [val_6, setval_6] = useState(0);
        const [val_7, setval_7] = useState(0);
        const [val_8, setval_8] = useState();
        const [val_9, setval_9] = useState();
        const [calc, setCalc] = useState(0);
        const [racine, setracine] = useState(1.732);
        const [result_1, setresult_1] = useState(0);
        const [result_2, setresult_2] = useState(0);
        const [result_3, setresult_3] = useState(0);
        const [result_4, setresult_4] = useState(0);
        const [result_5, setresult_5] = useState(0);
        const [result_6, setresult_6] = useState(0);
        const [result_7, setresult_7] = useState(0);

        
        useEffect(() => {
            setCalc(0)
        },[])
        
        useEffect(() => {
            setresult_1(val_1.Value / racine)
            setresult_2(val_1.Value * racine)
            setresult_3(parseFloat(val_2.Value) * parseFloat(val_3.Value))
            setresult_4(parseFloat(val_2.Value) / parseFloat(val_3.Value))
            setresult_5(parseFloat(val_2.Value) + parseFloat(val_3.Value))
            setresult_6(parseFloat(val_2.Value) - parseFloat(val_3.Value))
            setresult_7(parseFloat(val_2.Value) / parseFloat(val_3.Value)*100)
        }, [val_1, val_2, val_3, racine, calc])
        
        const rac = '\u221A'
        
        const puissance = () => {
            setCalc(1)
            // console.log(val_4.Value, val_5.Value, val_6.Value, val_7.Value, val_8)
            if (val_4.Value === undefined ) {
                setval_8(parseFloat(val_5.Value) * parseFloat(val_6.Value) * 1.732 *val_7.Value)
            }
            else if (val_6.Value === undefined ) {
                setval_9(parseFloat(val_4.Value) / (parseFloat(val_5.Value) * 1.732 * val_7.Value))
            }
        }
            return (
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.container6}>
                            <View style={styles.container4}>
                            {/* <Text style={styles.text2}></Text> */}
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Input Title="Valeur" Change={(e) => setval_1({Value:e})} Value={val_1} Length={6} Placeholder="Valeur"/>
                                </View>
                                <View style={styles.container6}>
                                    <Text style={styles.text1}>Racine Carré</Text>
                                    <View style={styles.text4}>
                                        <Picker
                                            selectedValue = {racine}
                                            onValueChange = {newracine =>setracine(newracine)}
                                            style = {styles.text3}
                                            >
                                            <Picker.Item label = {rac + 3} value ="1.732"/>
                                            <Picker.Item label = {rac + 2} value ="1.4142"/>
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.container6}>
                                    <Info Taille="110" Title="V / Rac" TitleInfo={result_1.toFixed(0)}/>
                                </View>
                                <View style={styles.container6}>
                                    <Info Taille="110" Title="V x Rac" TitleInfo={result_2.toFixed(0)}/>
                                </View>
                            </View>
                            <View style={styles.container4}>
                            {/* <Text style={styles.text2}></Text> */}
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Input Title="Valeur 1" Change={(e) => setval_2({Value:e})} Value={val_2} Length={6} Placeholder="Valeur"/>
                                </View>
                                <View  style={styles.container6}>
                                <Text>       </Text>
                                </View>
                                <View style={styles.container6}>
                                    <Input Title="Valeur 2" Change={(e) => setval_3({Value:e})} Value={val_3} Length={6} Placeholder="Valeur"/>
                                </View>
                                <View style={styles.container6}>
                                    <Info Taille="110" Title="Résultat" TitleInfo={"V1 x V2 = " + result_3.toFixed(2)}/>
                                    <Info Taille="110" Title="" TitleInfo={"V1 / V2 = " + result_4.toFixed(2)}/>
                                    <Info Taille="110" Title="" TitleInfo={"V1 + V2 = " + result_5.toFixed(2)}/>
                                    <Info Taille="110" Title="" TitleInfo={"V1 - V2 = " + result_6.toFixed(2)}/>
                                    <Info Taille="110" Title="" TitleInfo={"V1 % V2 = " + result_7.toFixed(2)}/>
                                </View>
                            </View>
                            <View style={styles.container4}>
                            {/* <Text style={styles.text2}></Text> */}
                            </View>
                            <View style={styles.container6}>
                                <Text style={styles.text}>Pour caluler la puissance rentrez U - I - CosPhi</Text>
                                <Text style={styles.text}>Pour caluler le courant rentrez P - U - CosPhi</Text>
                            </View>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    { calc === 0 | val_8 === undefined ? <Input Title="P" Change={(e) => setval_4({Value:e})} Value={val_4} Length={6} Placeholder={"Valeur"}/> :
                                        <View style={{justifyContent: 'center'}}>
                                            <Text style={styles.text6}>P</Text>
                                            <Text style={styles.inputBox}>{val_8.toFixed(2)}</Text>
                                        </View>}
                                </View>
                                <View style={styles.container6}>
                                    <Input Title="U" Change={(e) => setval_5({Value:e})} Value={val_5} Length={6} Placeholder="Valeur"/>
                                </View>
                                <View style={styles.container6}>
                                    { calc === 0 | val_9 === undefined ? <Input Title="I" Change={(e) => setval_6({Value:e})} Value={val_6} Length={4} Placeholder="Valeur"/> :
                                        <View style={{justifyContent: 'center'}}>
                                            <Text style={styles.text6}>I</Text>
                                            <Text style={styles.inputBox}>{val_9.toFixed(2)}</Text>
                                        </View>}
                                </View>
                                <View style={styles.container6}>
                                    <Input Title="Cos phi" Change={(e) => setval_7({Value:e})} Value={val_7} Length={3} Placeholder="Valeur"/>
                                </View>
                            </View>
                            <TouchableOpacity
                                    style={{activeOpacity:2}}
                                    onPress={puissance}
                                >
                                <Text style={styles.button1}>Calculer</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
                )
        };

        export default Calcul
