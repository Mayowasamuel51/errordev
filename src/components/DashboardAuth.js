import React, { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import Header from '../Bulma/Header';
import NavLinks from '../Bulma/NavLinks';
import { ThreeDots } from 'react-loader-spinner';
import Home from '../pages/Home';

const DashboardAuth = (props) => {
    const navgate = useNavigate();
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navgate('/login');
        // redirect('/login')
    };

    // useEffect(() => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('email');
       
    //     alert('You are logged out.');
    // }, [auth.currentUser, navgate]);

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    marginTop: '120px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ThreeDots
                    height="120"
                    width="300"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <>
                <Home />
            </>
        );
    }

    return (
        <div style={{ marginBottom: '9rem' }}>
            <Header image={user.photoURL} logout={logout} displayName={user.displayName} />
            <NavLinks />
            <div className="container-fluid">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardAuth;