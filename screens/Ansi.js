import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase'

import styles from '../src/utils/styles'

const ansi = () => {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [updateSearch, setupdateSearch] = useState()
  
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
      <View style={styles.item2}>
        <View style={styles.item3}>
          <Text style={styles.title}>{item.Ansi}</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.title}>{item.Iec60617}</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.title}>{item.Iec61850}</Text>
        </View>
      </View>
      <View style={styles.item1}> 
        <Text style={styles.title1}>{item.DesignFr}</Text>
        <Text style={styles.title1}>{item.DesignEn}</Text>
      </View>
    </View>
  )

  handleSearch = (text => {
    const formattedQuery = text.toLowerCase()
    const data = _.filter(fullData, ansi)
  })

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
          <SearchBar
            placeholder="Type Here"
            value={updateSearch}
            onChangeText={handleSearch}
          />
      <View style={styles.container8}>
        <View style={styles.item2}>
          <View style={styles.item3}>
            <Text style={styles.title}>ANSI</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.title}>Iec60617</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.title}>Iec61850</Text>
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