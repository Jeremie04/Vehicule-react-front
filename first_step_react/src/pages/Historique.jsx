import React from 'react'
import ListAnnonce from '../components/ListAnnonce'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import "../assets/css/styles.min.css"


const Historique = () => {
  return (
       
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Historique de vos annonces"/>

            <div className="container-fluid">

                <ListAnnonce/>
                <ListAnnonce/>
                <ListAnnonce/>
            </div>
        </div>

    </div>
  )
}

export default Historique