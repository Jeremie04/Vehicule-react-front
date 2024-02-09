import React from 'react'
import PropTypes from 'prop-types'
import Utilisateur from '../components/Utilisateur'

const Utilisateur = props => {
  return (
    <div className="media w-50 mb-3" style={props.isuser ? { marginLeft: 300 } : {}}><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle"/>
        <div className="media-body ml-3">
          <p><a href="" value={props.id} className="idutilisateur">{props.nom} {props.prenom}</a> </p>
        </div>
    </div>
  )
}

Utilisateur.propTypes = {
    nom : PropTypes.string,
    prenom : PropTypes.string,
    id : PropTypes.string,
}

export default Utilisateur

