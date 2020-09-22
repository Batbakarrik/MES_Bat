import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase'

import styles from '../src/utils/styles'

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

export default ansi;