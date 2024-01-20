import React from 'react'

import user from "../../assets/images/profile/user-1.jpg";
import { Link } from 'react-router-dom';

function Header ({title}) {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className='m-3'>{title}</h1>
                
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <div className="nav-link" aria-expanded="false">
                        <img src={user} alt="" width="35" height="35"
                            className="rounded-circle m-3"/>
                            User Name
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link nav-icon-hover" to="/message">
                                <i className="ti ti-message"></i>
                                <div className="notification bg-primary rounded-circle"></div>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" className="btn btn-primary m-3"><i className="ti ti-login"></i> Log in</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header