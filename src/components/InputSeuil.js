import React from 'react'
import { StyleSheet, View} from 'react-native'

import Input from './Input'

import colors from '../utils/colors'

const InputSeuil = ({curve, seuil_Ix1, seuil_Ix2, seuil_Ix3, setseuil_Ix1, setseuil_Ix2, setseuil_Ix3}) => (
    <View>
        <View style={styles.container2}>
            {curve !== '0'? <Input Title="Ir_1" Change={setseuil_Ix1} Valeur={seuil_Ix1} Length={4} Placeholder="Entrez Seuil"/>: null}
        </View>
        <View style={styles.container2}>
            {curve !== '0'? <Input Title="Ir_2" Change={setseuil_Ix2} Valeur={seuil_Ix2} Length={4} Placeholder="Entrez Seuil"/>: null}
        </View>
        <View style={styles.container2}>
            {curve !== '0'? <Input Title="Ir_3" Change={setseuil_Ix3} Valeur={seuil_Ix3} Length={4} Placeholder="Entrez Seuil"/>: null}
        </View>
    </View>
    )
    export default InputSeuil
    
    const styles = StyleSheet.create({
        container2: {
            display: 'flex',
            margin: 9,
            alignItems: 'center',
            backgroundColor: colors.background,
        },
    })