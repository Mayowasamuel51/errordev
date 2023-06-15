import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import analytics from '../Firbase';
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navgate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const [user, loading, error] = useAuthState(auth)
    const signin = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
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
        localStorage.setItem('email', user.email)
        // navgate(`dashboard/${user.email}`)
    }
    return (
        <>
            <nav className="navbar is-family-sans-serif" role="navigation" aria-label="main navigation" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <div className="navbar-brand">
                    <Link className="navbar-item" href="https://bulma.io">
                        <h2 className='has-text-semibold is-size-3 has-text-weight-bold'>ErrorDev</h2>
                    </Link>

                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item">
                            Home
                        </Link>

                        <Link className="navbar-item">
                            Documentation
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link">
                                More
                            </Link>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item">
                                    About
                                </Link>
                                <Link className="navbar-item">
                                    Jobs
                                </Link>
                                <Link className="navbar-item">
                                    Contact
                                </Link>
                                <hr className="navbar-divider" />
                                {/* <Link className="navbar-item">
                                    About 
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-primary" onClick={signin}>
                                    <strong>Google signin</strong>
                                </Link>
                                <Link className="button is-light">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav