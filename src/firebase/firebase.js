import {useState} from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config';


class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }
    
    // handleLogin = () => {
    //     // console.log(email),
    //     // console.log(password),
    //     firebase.auth.signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //       console.log('handleLogin')
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // }
    
    logout = () => {
        this.auth.signOut(),
        console.log('logout')
    }
}

const firebase = new Firebase()
export default firebase