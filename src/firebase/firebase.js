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
        })
        .catch(error => {
            var errorMessage = error.message
            var errorCode = error.code
          alert(errorMessage)
          alert(errorCode)
        })
    }

    signUp = (email, password, name, user) => {

        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            if(user === false){
                user.sendEmailVerification().then(function(){
                console.log("email verification sent to user");
                });
            }
            return userCredentials.user.updateProfile({
                displayName: name
            })
        })
        .catch(error => {
            var errorMessage = error.message
            var errorCode = error.code
          alert(errorMessage)
          alert(errorCode)
        });
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