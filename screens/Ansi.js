import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, ActivityIndicator, TextInput } from 'react-native';
import firebase from 'firebase'

import styles from '../src/utils/styles'

const ansi = () => {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    const dbRefObject = firebase.database().ref().child('ansi')
    const data = []
    dbRefObject.orderByChild('ansi').startAt(search).on('value', (snap) => {
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
  
}, [search])

if (loading) {
  return <ActivityIndicator />
}

const renderItem = ({ item }) => (
  <View style={styles.item0} key={item.key}>
      <View style={styles.item2b}>
        <View style={styles.item3b}>
          <Text style={styles.title}>{item.Ansi}</Text>
        </View>
        <View style={styles.item3b}>
          <Text style={styles.title}>{item.Iec61850}</Text>
        </View>
        <View style={styles.item3b}>
          <Text style={styles.title}>{item.Iec60617}</Text>
        </View>
      </View>
      <View style={styles.item1}> 
        <Text style={styles.title1}>{item.DesignFr}</Text>
        <Text style={styles.title1}>{item.DesignEn}</Text>
      </View>
    </View>
  )

  // handleSearch = (text => {
    //   const formattedQuery = text.toLowerCase()
  //   const data = _.filter(fullData, ansi)
  // })

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
        <View style={styles.item2c}>
          <Text style={styles.title}>Recherche par Code ANSI</Text>
          <TextInput style={styles.inputBox}
            placeholder="Code"
            onChangeText={setSearch}
          />
      </View>
      <View style={styles.container8}>
        <View style={styles.item2b}>
          <View style={styles.item3c}>
            <Text style={styles.title}>ANSI</Text>
          </View>
          <View style={styles.item3c}>
            <Text style={styles.title}>IEC61850</Text>
          </View>
          <View style={styles.item3c}>
            <Text style={styles.title}>IEC60617</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      </View>
    </SafeAreaView>
  );
}

export default ansi;