import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import { useDispatch, useSelector } from 'react-redux'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/dialogsReducer'
import Dialogs from './Dialogs.jsx'

const DialogsContainer = props => {
	const dispatch = useDispatch()
	const state = useSelector(state => state.messagesPage)

	const onSendMessageClick = () => {
		dispatch(sendMessageCreator(state.newMessageBody)) // Используем состояние из Redux
	}

	const onNewMessageChange = body => {
		dispatch(updateNewMessageBodyCreator(body)) // Обновляем текст нового сообщения
	}

	return (
		<Dialogs
			updateNewMessageBody={onNewMessageChange}
			sendMessage={onSendMessageClick}
			messagesPage={state}
		/>
	)
}

export default DialogsContainer
