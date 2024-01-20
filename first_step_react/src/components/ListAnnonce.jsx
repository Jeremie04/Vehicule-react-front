import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import img from "../assets/images/products/s4.jpg"


const ListAnnonce = props => {
  return (
    <div class="container-fluid">
        <div class="card overflow-hidden rounded-2">
            <div className="row">
                <div className="col-md-3">
                    <div class="position-relative">
                        <a href="javascript:void(0)"><img src={img} class="card-img-top rounded-0"
                                alt="..."/></a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div class="card-body pt-3 p-4">
                        <h6 class="fw-semibold fs-4">Casque</h6>
                        <div class="d-flex align-items-center justify-content-between">
                            <h6 class="fw-semibold fs-4 mb-0">10000 Ar
                            </h6>
                            <ul class="list-unstyled d-flex align-items-center mb-0">
                                <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

ListAnnonce.propTypes = {}

export default ListAnnonce