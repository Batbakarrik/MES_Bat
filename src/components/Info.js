import React from 'react'
import { View, Text} from 'react-native'

import colors from '../utils/colors'

const Info = ({ Title, TitleInfo }, Taille) => (
    <View style={{
        alignItems: 'center',
        }}>
        <Text style={{
            width: Taille.Value,
            color: colors.texte,
            textAlign: 'center'
        }}>{Title}</Text>
        <Text style={{
            width: Taille.Value,
            color: colors.texte,
            textAlign: 'center'
        }}>{TitleInfo}</Text>
    </View>
)
    export default Info