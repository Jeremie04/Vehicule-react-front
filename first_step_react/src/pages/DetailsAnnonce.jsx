import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import img1 from "../assets/images/products/s1.jpg"
import img2 from "../assets/images/products/s4.jpg"
import img3 from "../assets/images/products/s5.jpg"
import img4 from "../assets/images/products/s7.jpg"
import img5 from "../assets/images/products/s11.jpg"
import "../assets/css/styles.min.css"

import { Link } from 'react-router-dom'

const DetailsAnnonce = props => {
    const imgs = [img1, img2, img3, img4, img5];

    const [id_img, set_img] = useState(0);
    const nextImg = () => {
        set_img(id_img + 1)
        console.log(id_img)
        if(id_img == imgs.length - 1){
            set_img(0);
        }
    }
    const PreviousImg = () => {
        set_img(id_img - 1);
        console.log(id_img)
        if(id_img == 0){
            set_img(imgs.length - 1);
        }
    }

  return (
    
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Details"/>

            <div className="container-fluid">
                <Link to="/" className="btn btn-secondary">Retour</Link>
                    <div className="card container-fluid rounded-2 mt-5">
                        <div className="row">
                            <div className="col-md-5 posotion-relative">
                                <img src={imgs[id_img]} className="card-img-top rounded-0" alt="..."/>
                                    <button onClick={PreviousImg} className='btn bg-primary rounded-circle p-2 text-white posotion-relative d-inline-flex bottom-0 mb-n3 me-3'><i
                                        className="ti ti-chevron-left fs-4"></i></button>
                                    <button onClick={nextImg} className='btn bg-primary rounded-circle p-2 text-white posotion-relative d-inline-flex bottom-0 mb-n3 me-3'><i
                                        className="ti ti-chevron-right fs-4"></i></button>
                            </div>
                            <div className="col-md-7">
                                <h1>HeadPhone</h1>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa atque nobis reprehenderit! Reprehenderit, incidunt veritatis. Sed tempora obcaecati, dignissimos quo sit, saepe quibusdam libero magni ea inventore omnis, nesciunt culpa.
                                <table className="table text-nowrap mb-0 align-middle">
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
                                <div className="card-body p-4">
                                    <button type="button" className="btn btn-warning m-1"><i className="ti ti-star"></i> Favoris</button>
                                    <button type="button" className="btn btn-primary m-1"><i className="ti ti-message"></i> Envoyer Message</button>
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