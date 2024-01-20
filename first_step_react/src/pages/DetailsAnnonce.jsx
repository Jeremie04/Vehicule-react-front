import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import img from "../assets/images/products/s4.jpg"
import "../assets/css/styles.min.css"

import { Link } from 'react-router-dom'

const DetailsAnnonce = props => {
  return (
    
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div class="body-wrapper">
            <Header title="Details"/>

            <div class="container-fluid">
                <Link to="/" class="btn btn-secondary">Retour</Link>
                    <div class="card container-fluid rounded-2 mt-5">
                        <div class="row">
                            <div class="col-md-5"><a href="javascript:void(0)"><img src={img} class="card-img-top rounded-0" alt="..."/></a></div>
                            <div class="col-md-7">
                                <h1>HeadPhone</h1>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa atque nobis reprehenderit! Reprehenderit, incidunt veritatis. Sed tempora obcaecati, dignissimos quo sit, saepe quibusdam libero magni ea inventore omnis, nesciunt culpa.
                                <table class="table text-nowrap mb-0 align-middle">
                                    <tbody>
                                        <tr>
                                            <td className='border-bottom-0'><strong>Prix</strong></td>
                                            <td className='border-bottom-0'>1000$</td>
                                        </tr>
                                        <tr>
                                            <td className='border-bottom-0'><strong>Prix</strong></td>
                                            <td className='border-bottom-0'>1000$</td>
                                        </tr>
                                        <tr>
                                            <td className='border-bottom-0'><strong>Prix</strong></td>
                                            <td className='border-bottom-0'>1000$</td>
                                        </tr>
                                        <tr>
                                            <td className='border-bottom-0'><strong>Prix</strong></td>
                                            <td className='border-bottom-0'>1000$</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="card-body p-4">
                                    <button type="button" class="btn btn-warning m-1"><i class="ti ti-star"></i> Favoris</button>
                                    <button type="button" class="btn btn-primary m-1"><i class="ti ti-message"></i> Envoyer Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </div>
  );
};

DetailsAnnonce.propTypes = {}

export default DetailsAnnonce