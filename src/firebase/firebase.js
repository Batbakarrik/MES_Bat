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

    // sendEmail = () =>
    //     this.auth.currentUser.sendEmailVerification()

    logout = () =>
        this.auth.signOut()

    // passwordReset = (email) =>
    //     this.auth.sendPasswordResetEmail(email)
    }

const firebase = new Firebase()
export default firebase