import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // googleAuthentication
    const provider = new GoogleAuthProvider();
    const googleSignInPop = () =>{
        return signInWithPopup(auth, provider);
    }

    // email and password authentication 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const userMoreInfo = (username, imageUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: imageUrl
        })
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log(loggedUser);
            setUser(loggedUser);
        })
        // it's stop observing when change AuthState
        return () => {
            unSubscribe();
        }
    })
    
    const authInfo = {
        
        user,
        createUser,
        userMoreInfo,
        signInUser,
        logOut,
        googleSignInPop
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;