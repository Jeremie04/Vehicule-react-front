import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Annonce2 = props => {
  return (
    <div className="col-sm-6 col-xl-4">
        <div className="card overflow-hidden rounded-2">
            <div className="position-relative">
                <a href="javascript:void(0)"><img src={props.img} className="card-img-top rounded-0"
                        alt="..."/></a>
                <Link
                    to={`/details-annonce2/${props.annonce.idAnnonce}`}
                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Add To Cart"
                    >
                    <i className="ti ti-eye fs-4"></i>
                </Link>
            </div>
            <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4 mb-0">{props.annonce.sousModele.modele.marque.nom_Marque} {props.annonce.sousModele.nomSous} 
                    </h6>
                
                <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-semibold fs-4 mb-0">{props.annonce.dateAnnonce} 
                    </p>
                    <p className="fw-semibold fs-4">{props.annonce.utilisateur.nomUtilisateur} {props.annonce.utilisateur.prenom}</p>
                    <ul className="list-unstyled d-flex align-items-center mb-0">
                        {/* <Link to={`/details-annonce/${props.annonce.idAnnonce}`} className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                                <i className="ti ti-eye fs-4"></i>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

Annonce2.propTypes = {
    // nom : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    // prix : PropTypes.string.isRequired,
    annonce : PropTypes.object,
}

export default Annonce2