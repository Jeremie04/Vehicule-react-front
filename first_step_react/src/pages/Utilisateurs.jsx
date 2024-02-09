import React from 'react'
import '../assets/css/Message.css'

import Utilisateur from '../components/Utilisateur'
import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'

const utilisateurs = []

const Utilisateus = props => {
  return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Chats"/>

            <div className="container-fluid">
                <div className="row rounded-lg overflow-hidden shadow">
                    <form action="#" className="bg-light">
                    {/* <!-- Chat Box--> */}
                    <div className="col-7 px-0">
                    <div className="px-4 py-5 chat-box bg-white">
                        {/* <!-- Sender Messages--> */}
                        {utilisateus.map((user, index) => (
                            <Utilisateur key={index} id={user.idutilisateur} nom={user.nom} prenom ={user.prenom} />
                        ))}

                    </div>
                    </div>
                    </form>

                    </div>
                </div>
            </div>
        </div>
  )
}

Utilisateus.propTypes = {}

export default MeUtilisateussage