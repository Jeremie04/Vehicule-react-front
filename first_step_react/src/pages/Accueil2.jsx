import React from 'react'
import Header from '../components/layOut/Header'
import Sidebar2 from '../components/layOut/Sidebar2'
import "../assets/css/styles.min.css"
import  { useEffect, useState } from 'react';
import Annonce2 from '../components/Annonce2'
import img from "../assets/images/products/s4.jpg"
import avoirCategorie from '../service/Categorie'
import avoirMarque from '../service/Marque';
import avoirModele from '../service/Modele';
import avoirAnnonce from '../service/Annonce';

const Accueil2 = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const categoriesData = await avoirCategorie();
          setCategories(categoriesData);
      };
      fetchData();
  }, []);

  const [marques, setMarques] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const marquesData = await avoirMarque();
          setMarques(marquesData);
      };
      fetchData();
  }, []);
  
  const [modeles, setModeles] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const modelesData = await avoirModele();
          setModeles(modelesData);
      };
      fetchData();
  }, []);

  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const annonceData = await avoirAnnonce();
          setAnnonces(annonceData);
      };
      fetchData();
  }, []);

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar2 />

        <div className="body-wrapper">
            <Header title="Accueil"/>
            <div className="container-fluid"> 
              <div className="card mb-0">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Recherche Avancée</h5>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-label">Mot Clé</label>
                        <input type="text" name="motCle" className="form-control" placeholder='Mot Clé'/>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Categorie</label>
                        <select name="idCategorie" className="form-control">
                        <option value="">Categorie</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>{category.nomCategorie}</option>
                        ))}
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">De</label>
                        <input type="date" name="dateMax" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">a</label>
                        <input type="date" name="dateMin" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Marque</label>
                        <select name="idMarque" className="form-control">
                        <option value="">marque</option>
                          {marques.map(marque => (
                          <option key={marque.id} value={marque.id}>{marque.nom_Marque}</option>
                        ))}
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Modele</label>
                        <select name="idModele" className="form-control">
                          <option value="">modele</option>
                          {modeles.map(modele => (
                          <option key={modele.id} value={modele.id}>{modele.nomModele}</option>
                        ))}
                        </select>
                      </div>
                      <div className="col-md-3">

                        <label  className="form-label">Prix maximum</label>
                        <input type="number" name="dateMax" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label  className="form-label">Date minimum</label>
                        <input type="number" name="dateMin" className="form-control"/>

                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
              {annonces.map((ann,index) => (
                  // <option key={marque.id} value={marque.id}>{marque.nom_Marque}</option>
                  <Annonce2 key={index} annonce={ann}  img={img} />
              ))}
                {/* <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} />
                <Annonce nom = {"Head Phone"} prix={1500} img={img} /> */}
              </div>        
            </div>
        </div>

    </div>
  )
}

export default Accueil2