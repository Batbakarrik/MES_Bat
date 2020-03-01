import React from 'react'
import { StyleSheet, View} from 'react-native'

import Input from './Input'

import colors from '../utils/colors'

const InputSeuil = ({curve, seuil_Ix1, seuil_Ix2, seuil_Ix3, setSeuil_Ix1, setSeuil_Ix2, setSeuil_Ix3}) => (
    <View style={styles.container2}>
        {curve !== '0'? <Input Title="Ix_Seuil (A)" Change={setSeuil_Ix1} Valeur={seuil_Ix1} Length={4} Placeholder="Entrez Seuil"/>: null}
        {curve !== '0'? <Input Title="Ix_Seuil (A)" Change={setSeuil_Ix2} Valeur={seuil_Ix2} Length={4} Placeholder="Entrez Seuil"/>: null}
        {curve !== '0'? <Input Title="Ix_Seuil (A)" Change={setSeuil_Ix3} Valeur={seuil_Ix3} Length={4} Placeholder="Entrez Seuil"/>: null}
    </View>
    )
    export default InputSeuil
    
    const styles = StyleSheet.create({
        container2: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
    })