import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useNavigate } from 'react-router-dom';
import DashboardAuth from '../components/DashboardAuth';
import '../../node_modules/bulma/css/bulma.min.css'

const Nav = () => {
    const navgate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const [user, loading, error] = useAuthState(auth)
    const signin = async () => {
        const result = await  signInWithPopup(auth, provider)
        console.log(result.user)
        // localStorage.setItem('email', user.email)
        // localStorage.setItem('token', user.getIdToken())
    }
    const storeUser = async () => {
        const data = {
            developername: user.displayName,
            accesstoken: user.email,
        }
        const response = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const data_users = await response.json()
        return data_users
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
        localStorage.setItem('email', user.email);
        navgate('/dashboard');
        return null;
    }
        

    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                <div className="container-fluid">
                    <Link className="nav-link" to="/">
                        <h2 className='fw-bold h3 '>ErrorDev</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                                {/* <ul className="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul> */}
                            {/* </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">

                            < Link className="btn btn-primary" onClick={signin} >
                                <strong>Log in </strong>
                            </Link >
                        </form>
                    </div>
                </div>
            </nav>

        </>



    )
}

export default Nav

