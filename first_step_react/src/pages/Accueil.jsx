import React from 'react'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import "../assets/css/styles.min.css"

import Annonce from '../components/Annonce'
import img from "../assets/images/products/s4.jpg"

const Accueil = () => {
  return (
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div class="body-wrapper">
            <Header title="Accueil"/>

            <div class="container-fluid">
              <div className="row">
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
              </div>        
            </div>
        </div>

    </div>
  )
}

export default Accueil