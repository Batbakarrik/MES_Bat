import React, { Component } from 'react'

import { Text, View, FlatList } from 'react-native';

export default class Acceuil extends Component {
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
            "name":" tutu",
            "url":""
            }
        ]
    }
    render(){
        return (
          <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                  <FlatList
                      data={this.state.pokemons}
                      renderItem={({ item}) => <View><Text>{item.name}</Text></View>}
                      keyExtractor={item => item.name}
                  />
          </View>
        );
    }
}