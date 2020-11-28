import React from 'react'
import { View, Text} from 'react-native'

import colors from '../utils/colors'

const Info = ({ Title, TitleInfo }, Taille) => (
    <View style={{
        paddingLeft: 16,
        alignItems: 'center',
        }}>
        <Text style={{
            width: Taille.Value,
            color: colors.texte,
            height: 34,
            textAlign: 'center'
        }}>{Title}</Text>
        <Text style={{
            width: Taille.Value,
            color: colors.texte,
            marginBottom: 10
        }}>{TitleInfo}</Text>
    </View>
)
    export default Info