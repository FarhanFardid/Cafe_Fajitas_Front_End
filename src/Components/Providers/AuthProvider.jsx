import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const googleUser = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const githubUser = () =>{
        return signInWithPopup(auth,githubProvider)
    }

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUser = (email,password) =>{
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

    const authInfo ={
createUser,signUser,logout,profileUpdate,googleUser,githubUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;