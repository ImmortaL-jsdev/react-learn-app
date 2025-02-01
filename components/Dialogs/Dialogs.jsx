// import DialogItem from './DialogItem/DialogItem'
// import s from '../Dialogs/Dialogs.module.css'
// import Message from './Message/Message'
// import {
// 	sendMessageCreator,
// 	updateNewMessageBodyCreator,
// } from '../../src/redux/dialogsReducer.jsx'

// const Dialogs = props => {
// 	let state = props.store.getState().messagesPage

// 	let dialogsElements = state.dialogsData.map(dialog => (
// 		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
// 	))

// 	let messagesElements = state.messageData.map(message => (
// 		<Message key={message.id} message={message.message} id={message.id} />
// 	))

// 	let newMessageBody = state.newMessageBody

// 	let onSendMessageClick = () => {
// 		let text = addNewMessage.current.value
// 		props.store.dispatch(sendMessageCreator())
// 	}
// 	let onNewMessageChange = e => {
// 		let body = e.target.value
// 		props.store.dispatch(updateNewMessageBodyCreator(body))
// 	}

// 	const addNewMessage = useRef()
// 	return (
// 		<>
// 			<div className={s.dialogs}>
// 				<div className={s.dialog_items}>{dialogsElements}</div>
// 				<div className={s.messages}>
// 					<div className=''>{messagesElements}</div>

// 					<textarea
// 						placeholder='Enter your message'
// 						value={newMessageBody}
// 						onChange={onNewMessageChange}
// 						className={s.new_message_textarea}
// 						ref={addNewMessage}
// 					></textarea>

// 					<button onClick={onSendMessageClick} className={s.new_message_btn}>
// 						Send
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Dialogs

import React, { useRef } from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from '../Dialogs/Dialogs.module.css'
import Message from './Message/Message'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/dialogsReducer.jsx'

const Dialogs = props => {
	let state = props.store.getState().messagesPage

	let dialogsElements = state.dialogsData.map(dialog => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	let messagesElements = state.messageData.map(message => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	let newMessageBody = state.newMessageBody

	const addNewMessage = useRef() // Создаем ссылку

	let onSendMessageClick = () => {
		let text = addNewMessage.current.value // Получаем значение из текстового поля
		props.store.dispatch(sendMessageCreator(text)) // Передаем текст в действие
	}

	let onNewMessageChange = e => {
		let body = e.target.value
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialog_items}>{dialogsElements}</div>
				<div className={s.messages}>
					<div>{messagesElements}</div>

					<textarea
						ref={addNewMessage} // Привязываем ссылку к текстовому полю
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
		</>
	)
}

export default Dialogs
