import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import firebase from 'firebase'


import colors from '../src/utils/colors'
import { ActivityIndicator } from 'antd-mobile';


const Item = ({ Ansi, Iec61850, Iec60617, DesignFr, DesignEn }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{Ansi}  -  {Iec60617} -  {Iec61850}</Text>
    <View style={styles.item1}> 
        <Text style={styles.title1}>{DesignFr}</Text>
        <Text style={styles.title1}>{DesignEn}</Text>
    </View>
  </View>
);

const ansi = () => {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(() => {
    const dbRefObject = firebase.database().ref().child('ansi')
    const data = []
    dbRefObject.on('value', (snap) => {
      snap.forEach((child) => {
      data.push({
        key: child.id,
        ansi: child.val().ansi
      })
    }),
    setData(data),
    setLoading(false)
    console.log(data)
    console.log(loading)
    }, error => console.log(error))


    return () => dbRefObject()
  }, [])

  if (loading) {
    return <ActivityIndicator />
  }

  const renderItem = ({ item }) => (
    <Item
    Ansi={ansi}
    Iec61850={iec61850}
    Iec60617={iec60617}
    DesignFr={designFr}
    DesignEn={designEn}
    />
    )

    // const preObject = document.getElementById('ansi')
    // const dbRefObject = firebase.database().ref().child('ansi')

    //     dbRefObject.on('value', snap.forEach((child) => {
    //       items.push({
    //         key: child.id,
    //         ansi: child.val().ansi
    //       })
    //     }
    //     )
    //       // snap => console.log(snap.val())
    //       // {preObject.innerText = JSON.stringify(snap.val(),null,3)}
    //     )
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
    // console.log(snap.val()),
    <SafeAreaView style={styles.container}>
        <View style={styles.container4}>
            <Text style={styles.text2}>Codes ANSI - IEC60617 - IEC61850</Text>
        </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={data => id}
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