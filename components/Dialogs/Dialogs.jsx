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
import s from './Dialogs.module.css'
import Message from './Message/Message'
import { useDispatch, useSelector } from 'react-redux'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/dialogsReducer.jsx'

const Dialogs = () => {
	const dispatch = useDispatch() // Получаем dispatch
	const state = useSelector(state => state.messagesPage) // Получаем состояние из Redux

	const dialogsElements = state.dialogsData.map(dialog => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	const messagesElements = state.messageData.map(message => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	const newMessageBody = state.newMessageBody
	const addNewMessage = useRef() // Создаем ссылку

	const onSendMessageClick = () => {
		const text = addNewMessage.current.value // Получаем значение из текстового поля
		dispatch(sendMessageCreator(text)) // Передаем текст в действие
	}

	const onNewMessageChange = e => {
		const body = e.target.value
		dispatch(updateNewMessageBodyCreator(body)) // Обновляем текст нового сообщения
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
