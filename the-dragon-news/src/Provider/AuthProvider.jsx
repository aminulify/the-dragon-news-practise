import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [snipper, setSnipper] = useState(true);

    // googleAuthentication
    const provider = new GoogleAuthProvider();
    const googleSignInPop = () =>{
        setSnipper(true);
        return signInWithPopup(auth, provider);
    }

    // email and password authentication 
    const createUser = (email, password) =>{
        setSnipper(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const userMoreInfo = (username, imageUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: imageUrl
        })
    }
    const signInUser = (email, password) =>{
        setSnipper(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setSnipper(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            // console.log(loggedUser);
            setUser(loggedUser);
            setSnipper(false);
        })
        // it's stop observing when change AuthState
        return () => {
            unSubscribe();
            setSnipper(false);
        }
    })
    
    const authInfo = {
        
        user,
        snipper,
        createUser,
        userMoreInfo,
        signInUser,
        logOut,
        googleSignInPop,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;