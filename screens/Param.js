import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'


export default class Param extends Component {
    constructor(props) {
        super(props);
            this.state= {
                prim_I: 0,
                second_I: 0,
                prim_U: 0,
                second_U: 0,
                prim_I0: 0,
                second_I0: 0,
                prim_I_00: 0,
                second_I_00: 0,
                coef_I: 0,
                coef_U: 0,
                coef_I0: 0,
                coef_I00: 0,
                seuil_I: 0,
                seuil_U: 0,
                seuil_I0: 0,
                seuil_I00: 0,
                inj_I: 0,
                inj_U: 0,
                inj_I0: 0,
                inj_I00:0,
                maj: false,
            }
        this.calc_coef = this.calc_coef.bind(this);
        this.calc_seuil = this.calc_seuil.bind(this);
        }
        calc_coef = () => {
            this.setState({coef_I: this.state.second_I / this.state.prim_I})
            this.setState({coef_U: this.state.second_U / this.state.prim_U})
            this.setState({coef_I0: this.state.second_I0 / this.state.prim_I0})
            this.setState({coef_I00: this.state.second_I00 / this.state.prim_I00})
        }
        calc_seuil = () => {
            this.setState({inj_I: this.state.seuil_I * this.state.coef_I})
            this.setState({inj_U: (this.state.seuil_U * this.state.coef_U) / 1.732})
            this.setState({inj_I0: this.state.seuil_I0 * this.state.coef_I0})
            this.setState({inj_I00: this.state.seuil_I00 * this.state.coef_I00})
        }
        render() {
            const {prim_I, second_I, prim_U, second_U, prim_I0, second_I0, prim_I00, second_I00, seuil_I, seuil_U, seuil_I0, seuil_I00} = this.state
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TC" Change={(prim_I) => this.setState({prim_I})} Valeur={prim_I} Length={4} Placeholder="Entrez Valeur (A)"/>
                        <Input Titre="Secondaire TC" Change={(second_I) => this.setState({second_I})} Valeur={second_I} Length={1} Placeholder="Entrez Valeur (A)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TP" Change={(prim_U) => this.setState({prim_U})} Valeur={prim_U} Length={6} Placeholder="Entrez Valeur (V)"/>
                        <Input Titre="Secondaire TP" Change={(second_U) => this.setState({second_U})} Valeur={second_U} Length={3} Placeholder="Entrez Valeur (V)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire Tore1" Change={(prim_I0) => this.setState({prim_I0})} Valeur={prim_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <Input Titre="Secondaire Tore1" Change={(second_I0) => this.setState({second_I0})} Valeur={second_I0} Length={1} Placeholder="Entrez Valeur (I0)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire Tore2" Change={(prim_I00) => this.setState({prim_I00})} Valeur={prim_I00} Length={4} Placeholder="Entrez Valeur (I0)"/>
                        <Input Titre="Secondaire Tore2" Change={(second_I00) => this.setState({second_I00})} Valeur={second_I00} Length={1} Placeholder="Entrez Valeur (I0)"/>
                    </View>
                        <View style={styles.container1}>
                            <Input Titre="Seuil I" Change={(seuil_I) => this.setState({seuil_I})} Valeur={seuil_I} Length={4} Placeholder="Entrez Seuil (I)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.state.inj_I.toFixed(2)}</Text>
                        </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={(seuil_U) => this.setState({seuil_U})} Valeur={seuil_U} Length={6} Placeholder="Entrez Valeur (U)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.state.inj_U.toFixed(2)}</Text>
                            </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={(seuil_I0) => this.setState({seuil_I0})} Valeur={seuil_I0} Length={4} Placeholder="Entrez Valeur (I0)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.state.inj_I0.toFixed(2)}</Text>
                            </View>
                        <View style={styles.container1}>
                            <Input Titre="Primaire Tore2" Change={(seuil_I00) => this.setState({seuil_I00})} Valeur={seuil_I00} Length={4} Placeholder="Entrez Valeur (I0)"/>
                            <Text style={styles.text}>Injecter</Text>
                            <Text style={styles.text1}>{this.state.inj_I00.toFixed(2)}</Text>
                        </View>
                    <View style={styles.container1}>
                            <TouchableOpacity>
                                <Text
                                    style={styles.button}
                                    onPress={this.calc_coef}>
                                Calculer coef
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text
                                    style={styles.button}
                                    onPress={this.calc_seuil}>
                                Calculer Inj
                                </Text>
                            </TouchableOpacity>
                        </View>
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
        borderColor: colors.borderinput,
        borderRadius: 25,
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
        width: 100,
        margin: 8,
        paddingHorizontal: 8,
        backgroundColor: colors.button,
        borderColor: colors.borderinput,
        borderRadius: 25,
        color: colors.texte,
        textAlign: 'center',
    },
    text: {
        width: 70,
        margin: 4,
        paddingHorizontal: 8,
        color: colors.texte,
        // borderColor: colors.borderinput,
        // borderWidth: 1,
        // borderRadius: 25,
        textAlignVertical: 'center',
    },
    text1: {
        width: 70,
        margin: 8,
        paddingHorizontal: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})
