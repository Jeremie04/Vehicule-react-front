import React from 'react'
import AnnonceFav from '../components/AnnonceFav'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import "../assets/css/styles.min.css"
import img from "../assets/images/products/s4.jpg"


const Favoris = () => {
  return (
       
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Vos Annonces Favoris"/>

            <div className="container-fluid">
                <div className="row">
                    <AnnonceFav nom = {"Head Phone"} prix={1500} img={img}/>
                    <AnnonceFav nom = {"Head Phone"} prix={1500} img={img}/>
                    <AnnonceFav nom = {"Head Phone"} prix={1500} img={img}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Favoris