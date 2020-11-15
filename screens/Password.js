import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase'

import styles from '../src/utils/styles'

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
        <View style={styles.item2b}>
          <View style={styles.item3}>
            <Text style={styles.title1}>{item.Marque}</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.title1}>{item.Appareil}</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.title1}>{item.Iduser}</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.title1}>{item.Password}</Text>
          </View>
        </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container8}>
        <View style={styles.item2b}>
          <View style={styles.item3a}>
            <Text style={styles.title}>Marque</Text>
          </View>
          <View style={styles.item3a}>
            <Text style={styles.title}>Type</Text>
          </View>
          <View style={styles.item3a}>
            <Text style={styles.title}>Id</Text>
          </View>
          <View style={styles.item3a}>
            <Text style={styles.title}>Mdp</Text>
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

export default password;