import React from 'react'
import { StyleSheet, View} from 'react-native'

import Seuil from './Seuil'

import colors from '../utils/colors'
const Tempo = ({curve, Title1, Title1b, Title2, Title2b, Title3, Title3b, inj1, inj2, inj3}) => (
    <View style={styles.container2}>
        {curve == '0'? <Seuil Title={Title1} Value={inj1.toFixed(2)+" s"}/>: <Seuil Title={Title1b} Value={inj1.toFixed(2)+" s"}/>}
        {curve == '0'? <Seuil Title={Title2} Value={inj2.toFixed(2)+" s"}/>: <Seuil Title={Title2b} Value={inj2.toFixed(2)+" s"}/>}
        {curve == '0'? <Seuil Title={Title3} Value={inj3.toFixed(2)+" s"}/>: <Seuil Title={Title3b} Value={inj3.toFixed(2)+" s"}/>}
    </View>
    )
    export default Tempo
    
    const styles = StyleSheet.create({
        container2: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
    })