import React from 'react'

import "../assets/css/styles.min.css"
import imageUrl from "../assets/images/backgrounds/vehicule.jpg"

import { Link } from 'react-router-dom'

const Login = () => {
    
  const myStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
  };

  return (
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8">
                <div class="card mb-0 p-5 shadow">
                    <div className="row">
                        <div className="col-md-6" style={myStyles}></div>
                        <div className="col-md-6">
                            <div class="card-body">
                                <h1 class="text-center">Auto Change</h1>
                                <p className="text-center">Connectez-vous !</p>
                                <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Username</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <Link to="/liste-annonce" class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2 mt-5 shadow">Sign In</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login