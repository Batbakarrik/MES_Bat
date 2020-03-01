import React from 'react'
import { StyleSheet, View} from 'react-native'

import Seuil from './Seuil'

import colors from '../utils/colors'

const Temps = ({curve, temps1, temps2, temps3}) => (
    <View style={styles.container2}>
        {curve !== '0'?<Seuil Title="Tps de Déclench (S)" Value={temps1.toFixed(2)}/> : null}
        {curve !== '0'?<Seuil Title="Tps de Déclench (S)" Value={temps2.toFixed(2)}/> : null}
        {curve !== '0'?<Seuil Title="Tps de Déclench (S)" Value={temps3.toFixed(2)}/> : null}
    </View>
    )
    export default Temps
    
    const styles = StyleSheet.create({
        container2: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
    })