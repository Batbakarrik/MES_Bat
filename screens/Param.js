import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'
import Calcul1 from './Calcul1'


export default class Param extends Component {
    constructor(props) {
        super(props);
            this.state= {
                prim_I: 0,
                second_I: 0,
                coef_I: 0,
                coef_U: 0,
                seuil_I: 0,
                seuil_U: 0,
                inj_I: 0,
                inj_U: 0,
                maj: false,
            }
            console.log('state')
            this.calc_coef = this.calc_coef.bind(this);
            this.calc_seuil = this.calc_seuil.bind(this);
        }
        // componentDidUpdate = (prevProps, prevState) => {
        //     if (prevState.coef_I === 0) {
        //         const coef_I = this.state.second_I / this.state.prim_I
        //         this.setState({coef_I})
        //         console.log(coef_I)
        //         }
        //     return
        //     }

        calc_coef() {
            this.setState({
                coef_I: this.state.second_I / this.state.prim_I
            }),
            this.setState({
                coef_U: this.state.second_U / this.state.prim_U
            })
        }
        calc_seuil() {
            this.setState({
                inj_I: this.state.seuil_I * this.state.coef_I
            })
            this.setState({
                inj_U: (this.state.seuil_U * this.state.coef_U) / 1.732
            })
        }

        render() {
            console.log('render')
            console.log(this.state.maj)
            this.setState.maj=true
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TC" Change={(prim_I) => this.setState({prim_I})} Valeur={this.state.prim_I} Length={4} Placeholder="Entrez Valeur (A)"/>
                        <Input Titre="Secondaire TC" Change={(second_I) => this.setState({second_I})} Valeur={this.state.second_I} Length={1} Placeholder="Entrez Valeur (A)"/>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TP" Change={(prim_U) => this.setState({prim_U})} Valeur={this.state.prim_U} Length={6} Placeholder="Entrez Valeur (V)"/>
                        <Input Titre="Secondaire TP" Change={(second_U) => this.setState({second_U})} Valeur={this.state.second_U} Length={3} Placeholder="Entrez Valeur (V)"/>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity>
                            <Text
                                style={styles.button}
                                onPress={this.calc_coef}>
                            Calculer
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>{this.state.coef_I.toFixed(5)}</Text>
                        <Text style={styles.text}>{this.state.coef_U.toFixed(5)}</Text>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil (A)" Change={(seuil_I) => this.setState({seuil_I})} Valeur={this.state.seuil_I} Length={5} Placeholder="Entrez Valeur (A)"/>
                        <Text style={styles.text}>{this.state.inj_I.toFixed(2)}</Text>
                    </View>
                    <View style={styles.container1}>
                        <Input Titre="Seuil (V)" Change={(seuil_U) => this.setState({seuil_U})} Valeur={this.state.seuil_U} Length={5} Placeholder="Entrez Valeur (V)"/>
                        <Text style={styles.text}>{this.state.inj_U.toFixed(2)}</Text>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity>
                            <Text
                                style={styles.button}
                                onPress={this.calc_seuil}>
                            Calculer
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Calcul1/>
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
        width: 100,
        margin: 8,
        paddingHorizontal: 8,
        color: colors.texte,
        borderColor: colors.borderinput,
        borderWidth: 1,
        borderRadius: 25,
        textAlignVertical: 'center',
    },
})
