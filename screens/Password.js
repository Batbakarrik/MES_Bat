import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase'

import colors from '../src/utils/colors'

const password = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const dbRefObject = firebase.database().ref().child('password')
    const data = []
    dbRefObject.on('value', (snap) => {
      snap.forEach((child) => {
        data.push({
          key: child.key,
          Id: child.val().id,
          Appareil: child.val().appareil,
          Iduser: child.val().iduser,
          Marque: child.val().marque,
          Password: child.val().password,
      })
      }),
      setData(data),
      setLoading(false)

  }, error => console.log(error))
  
}, [])

if (loading) {
  return <ActivityIndicator />
}
  const renderItem = ({ item }) => (
    <View style={styles.item} key={item.key}>
      <View style={styles.item1}>
        <Text style={styles.title}>{item.Marque}</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.title1}>{item.Appareil}</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.title1}>{item.Iduser}</Text>
      </View>
      <View style={styles.item1a}>
        <Text style={styles.title1}>{item.Password}</Text>
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container4}>
          <Text style={styles.text2}>Mots de passe constructeurs</Text>
      </View>
      <View style={styles.item2}>
        <View style={styles.item3}>
          <Text style={styles.title}>Marque</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.title}>Type</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.title}>Id</Text>
        </View>
        <View style={styles.item4}>
          <Text style={styles.title}>Mdp</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: colors.background,
    // marginTop: StatusBar.currentHeight ||0,
  },
  text2: {
    fontSize: 20,
    paddingBottom: 8,
    paddingTop: 8,
    color: colors.texte,
    textAlignVertical: 'center',
  },
  container4: {
    width: 350,
    marginTop: 8,
    paddingBottom: 4,
    alignItems: 'center',
    borderRadius: 10,
    borderTopWidth: 1,
    borderColor: colors.bordercontainer,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    borderWidth: 0.2,
    borderColor: colors.bordercontainer,
    minWidth: 300
  },
  item1: {
    backgroundColor: colors.backgroundinput,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 0,
    // borderWidth: 0.2,
    // borderColor: colors.bordercontainer,
    width: 100
  },
  item1a: {
    backgroundColor: colors.backgroundinput,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 0,
    // borderWidth: 0.2,
    // borderColor: colors.bordercontainer,
    width: 65
  },
  item2: {
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  item3: {
    backgroundColor: colors.background,
    textAlign: 'center',
    width: 100
  },
  item4: {
    backgroundColor: colors.background,
    textAlign: 'center',
    width: 60
  },
  title: {
    fontSize: 14,
    color: colors.texte,
    textAlign: 'center'
  },
  title1: {
    fontSize: 14,
    color: colors.signuptext
  },
});

export default password;