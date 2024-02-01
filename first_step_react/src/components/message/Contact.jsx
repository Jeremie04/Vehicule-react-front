import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
  return (
    <a className="list-group-item list-group-item-action text-white rounded-0">
        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle"/>
            <div className="media-body ml-4">
                <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">{props.nom}</h6><small className="small font-weight-bold">{props.date}</small>
                </div>
                <p className="font-italic mb-0 text-small">{props.lastMessage}</p>
            </div>
        </div>
    </a>
  )
}

Contact.propTypes = {
    nom : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    lastMessage : PropTypes.string.isRequired,
}

export default Contact