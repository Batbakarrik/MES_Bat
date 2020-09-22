import {useState} from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config';

class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }
    
    signIn = (email, password) => {
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('handleLogin')
        })
        .catch(error => {
          alert(error)
        })
        }
        
    logout = () => {
        this.auth.signOut()
    }

    passwordReset = (email) => {
        this.auth.sendPasswordResetEmail(email)
        .then (() => {
            alert(`Email envoyé à ${email}`)
        })
        .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            }) 
        }
    }

const firebase = new Firebase()
export default firebase