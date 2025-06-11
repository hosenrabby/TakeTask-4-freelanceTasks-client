import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user , setUser] = useState()
    const [loading, setLoading] = useState(true);
    const [explocation, setExpLocation] = useState('');

    const signUpWithEmail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithEmail = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const passwordResetEmail = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser ,updateData)
    }

    const sognout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authData = {
        user,
        setUser,
        loading,
        signUpWithEmail,
        signInWithEmail,
        signInWithGoogle,
        updateUserProfile,
        sognout,
        passwordResetEmail,
        setExpLocation,
        explocation
    }
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;