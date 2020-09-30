import { useState, useEffect } from 'react'
import firebase from '../firebase'

const useAuth = () => {
    const [authUser, setAuthUser] = useState(null)
    console.log(authUser)

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user.emailVerified)
            } else {
                setAuthUser(null)
            }
        }
        )
    }, [])
    return authUser
}

export default useAuth