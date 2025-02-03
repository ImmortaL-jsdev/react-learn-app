import { connect } from 'react-redux'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../src/redux/dialogsReducer'
import Dialogs from './Dialogs.jsx'

let mapStateToProps = state => {
	return {
		messagesPage: state.messagesPage,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		updateNewMessageBody: body => {
			// Принимаем аргумент
			dispatch(updateNewMessageBodyCreator(body)) // Обновляем текст нового сообщения
		},
		sendMessage: text => {
			dispatch(sendMessageCreator(text))
		},
	}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
