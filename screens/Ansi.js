import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import data from '../src/products'
import colors from '../src/utils/colors'

const Item = ({ Ansi, Iec61850, Iec60617, DesignFr, DesignEn }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{Ansi}  /  {Iec60617} /  {Iec61850}</Text>
    <View style={styles.item1}> 
        <Text style={styles.title1}>{DesignFr}</Text>
        <Text style={styles.title1}>{DesignEn}</Text>
    </View>
  </View>
);

const ansi = () => {
  const renderItem = ({ item }) => (
    <Item
    Ansi={item.ansi}
    Iec61850={item.iec61850}
    Iec60617={item.iec60617}
    DesignFr={item.designFr}
    DesignEn={item.designEn}
    />
  );
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container4}>
            <Text style={styles.text2}>Codes ANSI / IEC61850 / IEC60617</Text>
        </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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