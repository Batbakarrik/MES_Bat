import React from 'react'
import { TextInput, View, Text} from 'react-native'

import styles from '../utils/styles'

const Input = ({ Value, Change, Placeholder, Length, Title }) => (
    <View style={{justifyContent: 'center'}}>
        <Text style={styles.text6}>{Title}</Text>
        <TextInput style={styles.inputBox}
            onChangeText={Change}
            Value={Value}
            maxLength = {Length}
            placeholder={Placeholder}
            keyboardType={"decimal-pad"}
        />
    </View>
)
    export default Input