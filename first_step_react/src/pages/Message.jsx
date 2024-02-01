import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/Message.css'

import Header from '../components/layOut/Header'
import Sidebar from '../components/layOut/Sidebar'
import Contact from '../components/message/Contact'
import MessageItem from '../components/message/MessageItem'

const contacts = [
  {
    nom: "John Doe",
    date: "2022-01-21",
    lastMessage: "Salut, comment ça va ?",
  },
  {
    nom: "Jane Smith",
    date: "2022-01-20",
    lastMessage: "Bonjour ! J'ai reçu ton message.",
  },
  {
    nom: "Bob Johnson",
    date: "2022-01-19",
    lastMessage: "Hey, à quelle heure la réunion demain ?",
  },
];

const messages = [
  {
    text: "Hello!",
    time: "12:00 PM | Aug 13",
    user: false,
  },
  {
    text: "Hi there!",
    time: "12:05 PM | Aug 13",
    user: true, 
  },
  {
    text: "How are you?",
    time: "12:10 PM | Aug 13",
    user: false,
  },
  {
    text: "I'm good, thanks!",
    time: "12:15 PM | Aug 13",
    user: true,
  },
];


const Message = props => {
  return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
            <Header title="Chats"/>

            <div className="container-fluid">
                <div className="row rounded-lg overflow-hidden shadow">
                    <div className="col-5 px-0">
                    <div className="bg-white">

                        <div className="messages-box">
                            <div className="list-group rounded-0">
                                {contacts.map((contact, index) => (
                                    <Contact key={index} nom={contact.nom} date={contact.date} lastMessage={contact.lastMessage} />
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Chat Box--> */}
                    <div className="col-7 px-0">
                    <div className="px-4 py-5 chat-box bg-white">
                        {/* <!-- Sender Messages--> */}
                        {messages.map((message, index) => (
                            <MessageItem key={index} text={message.text} dateTime={message.time} isuser ={message.user} />
                        ))}

                    </div>

                    <form action="#" className="bg-light">
                        <div className="input-group">
                            <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light"/>
                            <div className="input-group-append">
                                <button id="button-addon2" type="submit" className="btn btn-outline-primary m-3"> <i className="ti ti-send"></i></button>
                            </div>
                        </div>
                    </form>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

Message.propTypes = {}

export default Message