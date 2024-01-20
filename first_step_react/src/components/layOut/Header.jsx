import React from 'react'

import user from "../../assets/images/profile/user-1.jpg";
import { Link } from 'react-router-dom';

function Header ({title}) {
    return (
        <header class="app-header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <h1 className='m-3'>{title}</h1>
                
                <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <div class="nav-link nav-icon-hover" aria-expanded="false">
                        <img src={user} alt="" width="35" height="35"
                            class="rounded-circle m-3"/>
                            User Name
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link nav-icon-hover" to="/message">
                                <i class="ti ti-message"></i>
                                <div class="notification bg-primary rounded-circle"></div>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" class="btn btn-primary m-3"><i class="ti ti-login"></i> Log in</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header