import React from 'react'
import PropTypes from 'prop-types'

const MessageItem = props => {
  return (
    <div className="media w-50 mb-3" style={props.isuser ? { marginLeft: 300 } : {}}><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle"/>
        <div className="media-body ml-3">
            <div className={props.isuser ? "bg-primary rounded py-2 px-3 mb-2" : "bg-light rounded py-2 px-3 mb-2"} >
            <p className={props.isuser ? "text-small mb-0 text-white" : "text-small mb-0 text-muted"}>{props.text}</p>
            </div>
            <p className="small text-muted">{props.dateTime}</p>
        </div>
    </div>
  )
}

MessageItem.propTypes = {
    text : PropTypes.string,
    dateTime : PropTypes.string,
    isuser : PropTypes.bool,
}

export default MessageItem