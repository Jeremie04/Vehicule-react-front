import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import img from "../assets/images/products/s4.jpg"


const ListAnnonce = props => {
  return (
    <div className="container-fluid">
        <div className="card overflow-hidden rounded-2">
            <div className="row">
                <div className="col-md-3">
                    <div className="position-relative">
                        <a href="javascript:void(0)"><img src={img} className="card-img-top rounded-0"
                                alt="..."/></a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card-body pt-3 p-4">
                        <h6 className="fw-semibold fs-4">Casque</h6>
                        <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fw-semibold fs-4 mb-0">10000 Ar
                            </h6>
                            <ul className="list-unstyled d-flex align-items-center mb-0">
                                <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning"></i></a></li>
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