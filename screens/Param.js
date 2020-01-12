import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../src/utils/colors'
import Input from '../src/components/Input'


export default class Param extends Component {
    constructor(props) {
        super(props);
            this.state= {
                primary: '',
                secondary: '',
                results: '',
            }
            this.calc = this.calc.bind(this);
        }

        calc() {
            this.setState({
                results: this.state.secondary / this.state.primary
            });
            console.log(this.state.results)
        }
        
        render() {
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Input Titre="Primaire TC" Change={(primary) => this.setState({primary})} Valeur={this.state.primary} Length={4} Placeholder="Entrez Valeur"/>
                        <Input Titre="Secondaire TC" Change={(secondary) => this.setState({secondary})} Valeur={this.state.secondary} Length={1} Placeholder="Entrez Valeur"/>
                    </View>
                    <View style={styles.container1}>
                        <TouchableOpacity>
                            <Text
                                style={styles.button}
                                onPress={this.calc}>
                            Calculer
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>{this.state.results}</Text>
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
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
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
