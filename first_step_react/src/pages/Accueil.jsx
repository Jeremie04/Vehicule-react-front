import React from 'react'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

import "../assets/css/styles.min.css"

import Annonce from '../components/Annonce'
import img from "../assets/images/products/s4.jpg"

const Accueil = () => {
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Accueil"/>
            <div className="container-fluid"> 
              <div class="card mb-0">
                <div class="card-body">
                  <h5 class="card-title fw-semibold">Recherche Avancée</h5>
                    <div className="row">
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Mot Clé</label>
                        <input type="text" name="motCle" className="form-control" placeholder='Mot Clé'/>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Categorie</label>
                        <select name="idCategorie" className="form-control">
                          <option value="">Categorie 1</option>
                          <option value="">Categorie 2</option>
                          <option value="">Categorie 3</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">De</label>
                        <input type="date" name="dateMax" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">a</label>
                        <input type="date" name="dateMin" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Marque</label>
                        <select name="idMarque" className="form-control">
                          <option value="">Marque 1</option>
                          <option value="">Marque 2</option>
                          <option value="">Marque 3</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Modele</label>
                        <select name="idModele" className="form-control">
                          <option value="">Modele 1</option>
                          <option value="">Modele 2</option>
                          <option value="">Modele 3</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Prix maximum</label>
                        <input type="number" name="dateMax" className="form-control"/>
                      </div>
                      <div className="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Date minimum</label>
                        <input type="number" name="dateMin" className="form-control"/>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
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