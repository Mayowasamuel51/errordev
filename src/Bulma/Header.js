import React from 'react'
import './navheader'
const Header = (props) => {
    return (
        <div>
            <nav className="navbar has-shadow">

                <div className="container">
                    <div className="navbar-brand"><a className="navbar-item" href="../"><img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" /></a>
                        <div className="navbar-burger burger " data-target="navMenu"><span></span><span></span><span></span></div>
                    </div>
                    <div className="navbar-menu " id="navMenu">
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable"><a className="navbar-link">Welcome back<h3 className='pl-3 has-text-weight has-text-weight-semibold' >
                                {props.displayName}
                            </h3>
                            </a>
                                <div className="navbar-dropdown"><a className="navbar-item">Dashboard</a><a className="navbar-item">Profile</a><a className="navbar-item">Settings</a>
                                    <hr className="navbar-divider" />
                                    <div className="navbar-item" ><button onClick={props.logout}
                                        className='button is-dark is-full-desktop'>Logout</button></div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}


export default Header