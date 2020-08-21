import React, { useState, useEffect }  from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import firebase from '../src/firebase'
import colors from '../src/utils/colors'

const DataList = () => {

    const [data, setdata] = useState([]);
    
    useEffect(() => {
        // Get elements
        const preObject = document.getElementById('codeAnsi')
        //Create references
        const dbRefObject = firebase.database().ref().child('codeAnsi')
        //sync object changes
        dbRefObject.on('value', snap => {
            console.log(snap.val())
            setdata(snap.val())
            // preObject.innerText = JSON.stringify(snap.val(), null, 3)
        })
    }, [])
    // console.log(data)
    renderList = ({ansi, iec61850}) => {
        return (
            <view>
                <Text style={styles.text2}>{ansi}</Text>
                <Text style={styles.text2}>{iec61850}</Text>
            </view>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.container4}>
                        <Text style={styles.text2}>Code Ansi List</Text>
                        <Text style={styles.text2}>List {data.id}</Text>
                    </View>
                </View>
            </View>
            <FlatList
                style= {{flex:1, width:'100%'}}
                data={[data]}
                renderItem={({ item }) => renderList(item)}
                keyExtractor={item => item.id.toString()}
            />
        </ScrollView>
        )
    }
    export default DataList
    
    // const Ansi = () => {
        
        // const [Error, setError] = useState([]);
        // const [loading, setloading] = useState([]);
        // useEffect(() => {async function fetchData () {
        //     const response = await fetch("xipitei.com/api/api.json")
        //     const data = await response.json()
        //     const [item] = data.results
        //     setansi(item) }
        //     fetchData();
        // },[])
    
        // useEffect(() => {
        //     fetch('http://xipitei.com/api/api.json', {mode: 'cors'}, {headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Content-Type, Authorization',}})
        //       .then((response) => response.json())
        //       .then((json) => setdata(json.results))
        //       .catch((error) => console.error(error))
        //       .finally(() => setloading(false));
        //   },[]);
        
    //     useEffect(() => {
    //       axios.get('http://xipitei.com/api/movies.json'), {headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Content-Type, Authorization',}}
    //           .then(res => {
    //               setdata(res.data);
    //               setloading(true);
    //           })
    //           .catch(err => {
    //               setError(err.message);
    //               setloading(true)
    //           })
    //   }, []);

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            paddingTop: 30,
            alignItems: 'center',
            backgroundColor: colors.background,
            minHeight: 750
    
        },
        container1: {
            display: 'flex',
            flexDirection: 'row',
        },
        container2: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.background,
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
        inputBox: {
            width: 100,
            paddingHorizontal: 8,
            margin: 8,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderRadius: 25,
        },
        button: {
            width: 300,
            margin: 8,
            fontSize: 25,
            paddingHorizontal: 8,
            backgroundColor: colors.button,
            borderColor: colors.borderinput,
            borderRadius: 25,
            color: colors.texte,
            textAlign: 'center',
        },
        text: {
            width: 150,
            margin: 8,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderWidth: 4,
            borderRadius: 25,
            fontSize : 20,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        text1: {
            width: 150,
            // margin: 0,
            // paddingHorizontal: 0,
            color: colors.texte,
            textAlign: 'center',
            // textAlignVertical: 'center',
        },
        text2: {
            fontSize: 20,
            paddingBottom: 8,
            paddingTop: 8,
            color: colors.texte,
            textAlignVertical: 'center',
        },
        text3: {
            width: 120,
            color: colors.texte,
        },
        text4: {
            width: 120,
            height: 45,
            color: colors.texte,
            borderColor: colors.borderinput,
            borderWidth: 0,
            borderRadius: 25,
            textAlignVertical: 'center',
        },
    })