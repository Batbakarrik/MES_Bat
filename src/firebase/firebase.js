import app from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './config';

class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }
    // login = async () => {
    //     const {email, password} = this.state
    //     const { user } = await this.auth.signInWithEmailAndPassword(email, password)
    //     .catch(error => this.setState({errorMessage: error.message}))
    //     console.log(email)
    //   }
        Logout = async () => await this.auth.signOut
}

const firebase = new Firebase()
export default firebase