import React, { Component } from 'react'
import {Text, View, FlatList } from 'react-native'


export default class Pokemon extends Component {
    state = {
        pokemons : [
            {
            "name":" toto",
            "url":""
            },
            {
            "name":" tata",
            "url":""
            },
            {
            "name":" tut45",
            "url":""
            }
        ]
    }
    render(){
        return (
          <View style={styles.container}>
            <FlatList
                data={this.state.pokemons}
                renderItem={({ item }) => <View><Text>{item.name}</Text></View>}
                keyExtractor={item => item.name}
            />
            <Login/>
          </View>
        );
    }
}