import React, { useState , useEffect } from 'react'

import "../assets/css/styles.min.css"
import imageUrl from "../assets/images/backgrounds/vehicule.jpg"

import { Link } from 'react-router-dom'
import ApiUrl from '../api/ApiUrl'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    
  const myStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
  };

  const [error, setError] = useState("");
  const [login, setEmail] = useState("fan@gmail.com");
  const [motDePasse, setPass] = useState("pass");
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
  }, [login, motDePasse]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData =JSON.stringify({ login, motDePasse });

    console.log(formData);
    try {
      const response = await axios.post(ApiUrl+"/initial/login", formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
        // console.log("tafiditra!!!");
        console.log(response  .data.response.token);
        sessionStorage.setItem('token', response.data.response.token);
        navigate('/accueil2');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Une erreur inattendue s'est produite.");
      }
    }
    };  

  return (
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8">
                <div className="card mb-0 p-5 shadow">
                    <div className="row">
                        <div className="col-md-6" style={myStyles}></div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="text-center">Auto Change</h1>
                                <p className="text-center">Connectez-vous d'abord !</p>
                                <form className="pt-3" onSubmit={handleFormSubmit} encType="application/x-www-form-urlencoded">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="login" onChange={(e) => setEmail(e.target.value)} value ={login}/>
                                </div>
                                <div className="mb-4">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="motDePasse" placeholder="Password" value={motDePasse}
                          onChange={(e) => setPass(e.target.value)}/>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {/* <Link to="/liste-annonce" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2 mt-5 shadow">Sign In</Link> */}
                                <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2 mt-5 shadow">SIGN IN</button>
                                <div className="d-flex align-items-center justify-content-center">
                                  <Link className="text-primary fw-bold ms-2" to="/">Continuer sans connecter</Link>
                                </div>
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