import DialogItem from './DialogItem/DialogItem'
import s from '../Dialogs/Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
	let dialogsElements = props.dialogsData.map(dialog => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))

	let messagesElements = props.messageData.map(message => (
		<Message key={message.id} message={message.message} id={message.id} />
	))

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialog_items}>{dialogsElements}</div>
				<div className={s.messages}>{messagesElements}</div>
			</div>
		</>
	)
}

export default Dialogs
