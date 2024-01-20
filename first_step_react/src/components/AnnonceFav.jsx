import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import star  from '../assets/images/star-filled.svg'

const AnnonceFav = props => {
  return (
    <div className="col-sm-6 col-xl-3">
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
                <h6 className="fw-semibold fs-4">{props.nom}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fw-semibold fs-4 mb-0">{props.prix} Ar
                    </h6>
                    <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li><a className="me-1 text-warning" href="javascript:void(0)"><img src={star}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

AnnonceFav.propTypes = {
    nom : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    prix : PropTypes.string.isRequired,
}

export default AnnonceFav