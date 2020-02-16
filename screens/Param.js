import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import Seuil from '../src/components/Seuil'

export default class Param extends Component {

        render() {
            const {prim_I0, second_I0, setSeuil_I0, seuil_I0, inj_I0, setPrim_I0, setSecond_I0, calc_seuil } = this.props.screenProps
            return (
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.text2}>Caractéristiques Tore homopolaire</Text>
                        <View style={styles.container1}>
                            <Input Title="Primaire Tore" Change={setPrim_I0} Value={prim_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                            <Input Title="Secondaire Tore" Change={setSecond_I0} Value={second_I0} Length={1} Placeholder="Entrez Valeur (I0)"/>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <Input Title="Seuil I0" Change={setSeuil_I0} Value={seuil_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <View style={styles.container2}>
                            <Seuil Title="Injecter" Value={inj_I0.toFixed(2)}/>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity style={{activeOpacity:2}} onPress={calc_seuil}>
                            <Text style={styles.button}>Calculer</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.container}>
                        <TouchableOpacity style={{activeOpacity:2}} onPress={this.props.screenProps.calc_coef}>
                            <Text style={styles.button}>Calculer coef</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    container1: {
        flexDirection: 'row',
        borderTopWidth: 5,
        borderColor: colors.borderinput,
        borderRadius: 10,
        borderBottomWidth: 1,
    },
    inputBox: {
        width: 100,
        paddingHorizontal: 8,
        margin: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderRadius: 25,
    },
    button: {
        width: 300,
        margin: 8,
        fontSize: 25,
        paddingHorizontal: 8,
        backgroundColor: colors.button,
        borderColor: colors.borderinput,
        borderRadius: 25,
        color: colors.texte,
        textAlign: 'center',
    },
    text: {
        width: 150,
        margin: 4,
        fontSize: 14,
        paddingHorizontal: 8,
        // backgroundColor: colors.button,
        // borderColor: colors.borderinput,
        // borderRadius: 25,
        color: colors.texte,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    text1: {
        width: 70,
        margin: 4,
        fontSize: 20,
        paddingHorizontal: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
    text2: {
        // width: 70,
        fontSize: 20,
        paddingHorizontal: 8,
        color: colors.texte,
        textAlignVertical: 'center',
    },
    text3: {
        width: 120,
        marginLeft: 20,
        color: colors.texte,
    },
    text4: {
        width: 150,
        height: 45,
        paddingLeft: 10,
        borderWidth:1,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})
