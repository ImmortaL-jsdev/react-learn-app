import React, { useRef } from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = ({ updateNewMessageBody, sendMessage, messagesPage }) => {
	const dialogsElements = messagesPage.dialogsData.map(dialog => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	const messagesElements = messagesPage.messageData.map(message => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	const newMessageBody = messagesPage.newMessageBody
	const addNewMessage = useRef()

	// Обработчик при нажатии на кнопку "Send"
	const onSendMessageClick = () => {
		sendMessage()
	}

	// Обработчик изменения текста
	const onNewMessageChange = e => {
		const body = e.target.value
		updateNewMessageBody(body)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialog_items}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>

				<textarea
					ref={addNewMessage}
					placeholder='Enter your message'
					value={newMessageBody}
					onChange={onNewMessageChange}
					className={s.new_message_textarea}
				></textarea>

				<button onClick={onSendMessageClick} className={s.new_message_btn}>
					Send
				</button>
			</div>
		</div>
	)
}

export default Dialogs
