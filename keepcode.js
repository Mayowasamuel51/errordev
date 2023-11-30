
            {/* <button onClick={() => auth.signOut()}>
                signOut
            </button>
            // {user ? user.displayName : 'U ARE NOT SIGN IN '}
            {/* <Image width="300" height="200" src={user.photoURL}></Image> */}

{/* {user.phoneNumber} */ }
            
   // return (
        //   <div>
        //     <p>Current User: {user.displayName}</p>
        //     <button onClick={logout}>Log out</button>
        //   </div>
        // );
































        import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../../node_modules/bulma/css/bulma.min.css';

const Nav = () => {
    const navgate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, loading, error] = useAuthState(auth);

    const signin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            alert(error.message || 'Unable to sign in with Google.');
        }
    };

    const storeUser = async () => {
        try {
            const data = {
                developername: user.displayName,
                accesstoken: user.email,
            };

            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const data_users = await response.json();
            return data_users;
        } catch (error) {
            alert(error.message || 'Unable to store user data.');
        }
    };

    if (loading) {
        return <h1>LOADING....</h1>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (user) {
        localStorage.setItem('email', user.email);
        navgate('/dashboard');

        return null;
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                <div className="container-fluid">
                    <Link className="nav-link" to="/">
                        <h2 className="fw-bold h3">ErrorDev</h2>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="