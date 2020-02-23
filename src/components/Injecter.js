import React from 'react'
import { StyleSheet, View} from 'react-native'

import Seuil from './Seuil'
import Temps from './Temps'

import colors from '../utils/colors'

const Injecter = ({curve, inj1, inj2, inj3, temps}) => (
    <View style={styles.container2}>
        {curve == '0'? <Seuil Title="Injecter 0,95 seuil" Value={inj1.toFixed(2)}/>: <Seuil Title="Injecter 1.2x Iseuil" Value={inj1.toFixed(2)}/>}
        {curve == '0'? <Seuil Title="Injecter 1 seuil" Value={inj2.toFixed(2)}/>: <Seuil Title="Injecter 1.5x Iseuil" Value={inj2.toFixed(2)}/>}
        {curve == '0'? <Seuil Title="Injecter 1,1 seuil" Value={inj3.toFixed(2)}/>: <Seuil Title="Injecter 2x Iseuil" Value={inj3.toFixed(2)}/>}
        {curve !== '0'? <Temps temps={temps}/>: null}
    </View>
    )
    export default Injecter
    
    const styles = StyleSheet.create({
        container2: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
    })