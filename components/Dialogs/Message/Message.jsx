import React from 'react'
import s from '../Message/Message.module.css'

const Message = props => {
	let addNewMessage = React.createRef()
	let sendMessage = () => {
		let text = addNewMessage.current.value
		alert(text)
	}
	return <div className={s.message}>{props.message}</div>
}

export default Message
