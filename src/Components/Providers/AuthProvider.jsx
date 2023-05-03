import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const[user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const googleUser = () =>{
        setLoading(false)
        return signInWithPopup(auth,googleProvider)
    }

    const githubUser = () =>{
        setLoading(false)
        return signInWithPopup(auth,githubProvider)
    }

    const createUser =(email,password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUser = (email,password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
        return signOut(auth)
    }

    const profileUpdate =(user,name,image) =>{
      
        return updateProfile(user, {
            displayName: name , photoURL: image
          })

    }
 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setLoading(false);
        setUser(currentUser);
        // console.log(currentUser);

    })
    return ()=>{
        unsubscribe();
    }
 },[])

    const authInfo ={
createUser,signUser,logout,profileUpdate,googleUser,githubUser,user,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;