import { useState, useEffect } from 'react'
import firebase from '../firebase'

const useAuth = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            // this.navigation.navigate(user ? "App" : "Auth")
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        },
        )
    }, [])
    return authUser
    // console.log(authUser)
}

export default useAuth