import app from 'firebase/app'
// import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config';
import FirebaseContext from './context';

class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig).firestore()
        this.auth = app.auth()
        this.db = app.firestore()
    }

    signIn = async (users) => 
        await this.auth.signInWithEmailAndPassword(users.email, users.password)

    signUp = async (users) => 
        await this.auth.createUserWithEmailAndPassword(users.email, users.password)
        
    signUp2 = async (users) => {
        const uid = firebase.auth.currentUser.uid

        await this.db.collection("users").doc(uid).set({
            username: users.name,
            email: users.email,
            profil:"user",
        })
    }
    logout = () =>
        this.auth.signOut()

    pwdReset = (email) => this.auth.sendPasswordResetEmail(email)

        
    database = (data) => firebase.database().ref().child(data)
    }

const firebase = new Firebase()
export default firebase