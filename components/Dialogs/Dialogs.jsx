import DialogItem from './DialogItem/DialogItem'
import s from '../Dialogs/Dialogs.module.css'
import Message from './Message/Message'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/state'

const Dialogs = props => {
	let state = props.store.getState().messagesPage

	let dialogsElements = state.dialogsData.map(dialog => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	let messagesElements = state.messageData.map(message => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	let newMessageBody = state.newMessageBody

	let onSendMessageClick = () => {
		let text = addNewMessage.current.value
		props.store.dispatch(sendMessageCreator())
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
					<div className=''>{messagesElements}</div>

					<textarea
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
