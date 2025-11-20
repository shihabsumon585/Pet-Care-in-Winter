import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = () => {
            return onAuthStateChanged(auth, (currentUser) => {
                // setLoading(true);
                setUser(currentUser);
                setLoading(false)
            })
        }
        return (() => {
            unsubscribe();
        })
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then()
            .catch(error => console.log(error))
    }
    const updateProfile = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo);
    }

    const AuthValue = {
        createUser,
        userLogin,
        logOut,
        updateProfile,
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext value={AuthValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;