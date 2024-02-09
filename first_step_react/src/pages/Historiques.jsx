import React from 'react'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'
import "../assets/css/styles.min.css"

// import { useEffect,useState } from 'react'
import { useEffect , useState } from 'react'

// import avoirHistorique from '../service/Annonce'
import img from "../assets/images/products/s4.jpg"

import Historique from '../components/Historique'
import avoirHistorique from '../service/HistoriqueService'


const Historiques = () => {
    const [meshistoriques, setHistorique] = useState([]);
    const fetchData = async () => {
      const annonceData = await avoirHistorique();
      setHistorique(annonceData);
  };
    useEffect(() => {
        
        fetchData();
    }, []);
  return (
       
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Historique de vos annonces"/>

            <div className="container-fluid">
              <div className="row">
              {meshistoriques.map(histo => (
                  // <option key={marque.id} value={marque.id}>{marque.nom_Marque}</option>
                  <Historique annonce={histo}  img={img} />
              ))}
              </div>        
            </div>
        </div>

    </div>
  )
}

export default Historiques