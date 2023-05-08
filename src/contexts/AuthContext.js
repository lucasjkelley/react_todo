
import React, { useContext, useState, useEffect } from "react";
import { auth } from '../base'
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

//Context creation
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    //Login functionality
    const githubAuthProvider = new GithubAuthProvider()

    async function login() {
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
            //Here we could add additional functionality we want to fire off upon a user logging in
            //For example, I could give them a role or save their info to a local db
        }))
    }

    //Logout Functionality
    async function logout() {
        signOut(auth).then(setCurrentUser(null))
    }

    const value = {currentUser, login, logout}

    useEffect(() => {
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authChange
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
