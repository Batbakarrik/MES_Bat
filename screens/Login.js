import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import colors from '../utils/colors'


export default class Login extends Component {
    state= {
        primary: null,
        secondary: null,
        results: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    onChangeText={(primary) => this.setState({primary})}
                    value={this.state.text}
                    maxLength = {4}
                    placeholder="Primary"
                    keyboardType={"decimal-pad"}
                />
                <TextInput style={styles.inputBox}
                    onChangeText={(secondary) => this.setState({secondary})}
                    value={this.state.text}
                    maxLength = {1}
                    placeholder="Secondairy"
                    keyboardType={"decimal-pad"}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Resultat"
                    editable={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'center',
    },
    inputBox: {
        width: 100,
        paddingHorizontal: 8,
        margin: 8,
        color: colors.texte,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 25,
    }
})
