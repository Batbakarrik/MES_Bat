import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import firebase from 'firebase'

import colors from '../src/utils/colors'
import { ActivityIndicator } from 'antd-mobile';

const ansi = () => {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(() => {
    const dbRefObject = firebase.database().ref().child('ansi')
    const data = []
    dbRefObject.on('value', (snap) => {
      snap.forEach((child) => {
        data.push({
          key: child.key,
          Id: child.val().id,
          Ansi: child.val().ansi,
          Iec61850: child.val().iec61850,
          Iec60617: child.val().iec60617,
          DesignFr: child.val().designFr,
          DesignEn: child.val().designEn,
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
    <View style={styles.item0} key={item.key}>
      <Text style={styles.title}>{item.Ansi}  -  {item.Iec60617} -  {item.Iec61850}</Text>
      <View style={styles.item1}> 
        <Text style={styles.title1}>{item.DesignFr}</Text>
        <Text style={styles.title1}>{item.DesignEn}</Text>
      </View>
    </View>
  )

    // ajouter data dans Database
// firebase.database().ref('password').set(
  //   [{}]
  // ).catch((error) => {
    //   console.log(error)
    // })

    // mise à jour de Database
    // firebase.database().ref('password/1').update({
      //   password: ''
// })

// effacer données de Database
// firebase.database().ref('password/1').remove())

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container4}>
        <Text style={styles.text2}>Codes ANSI - IEC60617 - IEC61850</Text>
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
  item0: {
    backgroundColor: colors.backgroundinput,
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    borderWidth: 0.2,
    borderColor: colors.bordercontainer,
  },
  item1: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    borderWidth: 0.2,
    borderColor: colors.bordercontainer,
  },
  title: {
    fontSize: 18,
    color: colors.texte,
  },
  title1: {
    fontSize: 14,
    color: colors.signuptext
  },
});

export default ansi;