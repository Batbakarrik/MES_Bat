import { useState, useEffect } from 'react'
import firebase from '../firebase'

const useAuth = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        }
        ),
        console.log(authUser)
    }, [])
    return authUser
}

export default useAuth