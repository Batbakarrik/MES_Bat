import React, { useState, useEffect} from 'react'
import { View, TouchableOpacity, Text, Picker, ScrollView } from 'react-native'

import styles from '../src/utils/styles'
import Input from '../src/components/Input'
import Seuil from '../src/components/Seuil'
import Info from '../src/components/Info'


const Tension = () => {
    const [seuil_U, setseuil_U] = useState(0);
    const [seuilcoef_U, setseuilcoef_U] = useState(0);
    const [seuil_V, setseuil_V] = useState(0);
    const [seuil_Up, setseuil_Up] = useState(0);
    const [seuil_UpCoef, setseuil_UpCoef] = useState(0);
    const [prim_U, setprim_U] = useState(0);
    const [second_U, setsecond_U] = useState(100);
    const [coef_U, setcoef_U] = useState(0);
    const [inj_Uc, setinj_Uc] = useState(0);
    const [inj_Us, setinj_Us] = useState(0);

    useEffect(() => {
        setcoef_U(second_U / prim_U)
        setseuil_V(prim_U/1.732)
    },[prim_U, second_U]);
    
    useEffect(() => {
        setseuil_Up((seuil_U/prim_U)*100)
        setinj_Uc(seuil_U * coef_U)
        setinj_Us((seuil_U * coef_U)/1.732)
    },[seuil_U])

    useEffect(() => {
        setseuil_UpCoef(seuilcoef_U * prim_U)
        setinj_Uc((seuilcoef_U * prim_U) * coef_U)
        setinj_Us((seuilcoef_U * prim_U) * (coef_U/1.732))
    },[seuilcoef_U])
    
         return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Caractéristiques TP</Text>
                    </View> 
                    <View style={styles.container5}>
                        <View style={styles.container6}>
                            <View style={styles.container7}>
                                <Input Title="Primaire TP" Change={setprim_U} Value={prim_U} Length={6} Placeholder="Valeur !"/>
                            </View>
                            <View style={styles.container7}>
                                <Info Taille="110" Title="U simple" TitleInfo={seuil_V.toFixed(0)+" V"}/>
                            </View>
                        </View>
                        <View style={styles.container6}>
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
                        <View style={styles.container6}>
                            <Info Taille="110" Title="Coef_Us/Up" TitleInfo={coef_U.toFixed(4)}/>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Paramètre du seuil a calculer</Text>
                    </View>
                    <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Input Title="Seuil U" Change={setseuil_U} Value={seuil_U} Length={6} Placeholder="Valeur !"/>
                                    <Info Taille="110" Title=" " TitleInfo={seuil_Up.toFixed(1)+" %Un"}/>
                                </View>
                                <View style={styles.container6}>
                                    <Input Title="Coef xU" Change={setseuilcoef_U} Value={seuilcoef_U} Length={6} Placeholder="Valeur !"/>
                                    <Info Taille="110" Title=" " TitleInfo={seuil_UpCoef.toFixed(1)+" Un"}/>
                                </View>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Résultats</Text>
                    </View>
                    <View style={styles.container5}>
                        <View style={styles.container6}>
                            <View style={styles.container5}>
                                <View style={styles.container6}>
                                    <Seuil Title="Inj_U Comp." Value={inj_Uc.toFixed(2)}/>
                                </View>
                                <View style={styles.container6}>
                                    <Seuil Title="Inj_U Simple" Value={inj_Us.toFixed(2)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
};
    export default Tension