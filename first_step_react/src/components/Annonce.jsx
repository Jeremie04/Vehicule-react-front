import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Annonce = props => {
  return (
    <div className="col-sm-6 col-xl-4">
        <div className="card overflow-hidden rounded-2">
            <div className="position-relative">
                <a href="javascript:void(0)"><img src={props.img} className="card-img-top rounded-0"
                        alt="..."/></a>
                <Link to="/details-annonce"
                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i
                        className="ti ti-eye fs-4"></i></Link>
            </div>
            <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4 mb-0">{props.annonce.sousModele.modele.marque.nom_Marque} 
                    </h6>
                
                <div className="d-flex align-items-center justify-content-between">
                    <h7 className="fw-semibold fs-4 mb-0">{props.annonce.dateAnnonce} 
                    </h7>
                    <h7 className="fw-semibold fs-4">{props.annonce.utilisateur.nomUtilisateur} {props.annonce.utilisateur.prenom}</h7>
                    <ul className="list-unstyled d-flex align-items-center mb-0">
                        <Link  className="me-1" href="javascript:void(0)"> 
                            <i className="ti ti-star text-warning"></i>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

Annonce.propTypes = {
    // nom : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    // prix : PropTypes.string.isRequired,
    annonce : PropTypes.object,
}

export default Annonce