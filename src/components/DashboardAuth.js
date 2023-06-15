import React from 'react'
import analytics from '../Firbase';
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import Header from '../Bulma/Header';
import Search from '../Bulma/Search';
import NavLinks from '../Bulma/NavLinks';


const DashboardAuth = (props) => {
    const navgate = useNavigate()
    const auth = getAuth()
    const logout = () => {
        signOut(auth)
        localStorage.removeItem('email')
    }
    const [user, loading, error] = useAuthState(auth)
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
    if (!user) {
        navgate('/')
    }
    return (
        <div style={{ marginBottom: '200rem' }}>
            <Header logout={logout} displayName={user.displayName} />
            <Search />
            <NavLinks />
            <div className='container '>
                <Outlet context={user.email} />
            </div>
        </div >
    )
}
export default DashboardAuth


{/* {user ? user.displayName : 'U ARE NOT SIGN IN '}

            <button onClick={logout}>
                signOut
            </button> */}