import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/dialogsReducer'
import Dialogs from './Dialogs.jsx'
import withAuthRedirect from '../../hoc/WithAuthRedirect.jsx'

const DialogsContainer = () => {
	const messagesPage = useSelector(state => state.messagesPage)
	const isAuth = useSelector(state => state.auth.isAuth)

	const dispatch = useDispatch()

	const updateNewMessageBody = body => {
		dispatch(updateNewMessageBodyCreator(body))
	}

	const sendMessage = text => {
		dispatch(sendMessageCreator(text))
	}
	return (
		<>
			<Dialogs
				messagesPage={messagesPage}
				updateNewMessageBody={updateNewMessageBody}
				sendMessage={sendMessage}
				isAuth={isAuth}
			/>
		</>
	)
}

export default withAuthRedirect(DialogsContainer)
