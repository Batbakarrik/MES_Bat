import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config';

class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }
    signIn = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password)
        
    signUp = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)

    logout = () =>
        this.auth.signOut()
        
    database = (data) => firebase.database().ref().child(data)
    }

const firebase = new Firebase()
export default firebase