import React from 'react'
import { useState } from 'react';
// import ListAnnonce from '../components/ListAnnonce'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import "../assets/css/styles.min.css"

const [meshistoriques, setHistorique] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        const annonceData = await avoirHistorique();
        setHistorique(annonceData);
    };
    fetchData();
}, []);

const Historique = () => {
  return (
       
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Historique de vos annonces"/>

            <div className="container-fluid">
              <div className="row">
              {meshistoriques.map(histo => (
                  <><option key={marque.id} value={marque.id}>{marque.nom_Marque}</option><Historique annonce={histo} img={img} /></>
              ))}
              </div>        
            </div>
        </div>

    </div>
  )
}

export default Historique