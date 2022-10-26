import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config'

const auth=getAuth(app);

export const sharedContext = createContext();

const UserContext = ({children}) => {
    const [signUpError, SetSignUpError] = useState(null);
    const [signInError, setSignInError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return (
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                  }).then(() => {
                    console.log('Profile updated');
                    SetSignUpError(null)
                  }).catch((error) => {
                      SetSignUpError(error.code);
                      console.error('error', error);
                  });
                  
              })
              .catch((error) => {
                console.error('error', error);
                SetSignUpError(error.code);
                // ..
              })
        )
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return (signInWithEmailAndPassword(auth, email, password))
    }

    const googleSignIn = () => {
        setLoading(true);
        return (signInWithPopup(auth, googleProvider))
    }

    const gitHubLogin = () => {
        setLoading(true);
        return (signInWithPopup(auth, gitHubProvider))
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            console.log(user);
          });
          
        return ()=> unSubscribe();
    }, [])

    const contextData = {googleSignIn, gitHubLogin, createUser, signUpError, SetSignUpError, userSignIn, signInError, setSignInError, user, loading}

    return (
        <sharedContext.Provider value={contextData}>
            {children}
        </sharedContext.Provider>
    );
};

export default UserContext;