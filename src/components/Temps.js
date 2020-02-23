import React from 'react'
import { StyleSheet, View} from 'react-native'

import Seuil from './Seuil'

import colors from '../utils/colors'

const Temps = ({temps}) => (
    <View style={styles.container2}>
        <Seuil Title="Tps de Déclench (S)" Value={temps.toFixed(2)}/>
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