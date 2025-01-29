import React from 'react'
import s from '../Message/Message.module.css'

const Message = props => {
	let addNewMessage = React.createRef()
	let sendMessage = () => {
		let text = addNewMessage.current.value
		alert(text)
	}
	return (
		<div className={s.message}>
			{props.message}
			<textarea
				className={s.new_message_textarea}
				ref={addNewMessage}
			></textarea>
			<button className={s.new_message_btn} onClick={sendMessage}>
				Send message
			</button>
		</div>
	)
}

export default Message
