import React from 'react'
// import app from '../Firbase';
import analytics from '../Firbase';
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useNavigate } from 'react-router-dom';
const LoginUser = () => {
    const navgate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const [user, loading, error] = useAuthState(auth)
    const signin = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
    }
    const logout = () => {
        signOut(auth)
    }
    if (loading) {
        return <h1>LOADING....</h1>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    if (user) {
        navgate('/dashboard')
    }
    return (
        <div>
            <button onClick={signin}>
                signin
            </button>
        </div>
    )
}

export default LoginUser;