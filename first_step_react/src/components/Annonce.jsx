import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Annonce = props => {
  return (
    <div class="col-sm-6 col-xl-4">
        <div class="card overflow-hidden rounded-2">
            <div class="position-relative">
                <a href="javascript:void(0)"><img src={props.img} class="card-img-top rounded-0"
                        alt="..."/></a>
                <Link to="/details-annonce"
                    class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i
                        class="ti ti-eye fs-4"></i></Link>
            </div>
            <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">{props.nom}</h6>
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="fw-semibold fs-4 mb-0">{props.prix} Ar
                    </h6>
                    <ul class="list-unstyled d-flex align-items-center mb-0">
                        <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

Annonce.propTypes = {
    nom : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    prix : PropTypes.string.isRequired,
}

export default Annonce