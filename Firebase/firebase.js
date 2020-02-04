import app from 'firebase/MainTabNavigator'
import 'firebase/auth'
import firebaseConfig from './config'

class Firebase {
    constructor () {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }

    handleLogin = async () => {
        const { user } = await this.auth.signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage: error.message}))
        console.log(user)
      }
    }
    user = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
          })
    }

    currentUser = () => {
        firebase.auth().currentUser
    }

    signOutUser = () => {
        firebase.auth().signOut()
      }

const firebase = new Firebase()
export default firebase