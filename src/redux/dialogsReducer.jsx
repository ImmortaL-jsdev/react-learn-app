const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
	dialogsData: [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Alex' },
		{ id: 3, name: 'Ben' },
		{ id: 4, name: 'Peter' },
		{ id: 5, name: 'Fiona' },
		{ id: 6, name: 'Raze' },
	],
	messageData: [
		{ id: 1, message: 'Hello' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Who are you nigga, why are you kidding me?' },
		{ id: 4, message: 'Hola amigo, tu hablas espanol?' },
		{ id: 5, message: 'Yo, I am Fiona' },
		{ id: 6, message: 'My name is Raze' },
	],
	newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.newBody,
			}
		case SEND_MESSAGE:
			const newMessage = {
				id: state.messageData.length + 1,
				message: state.newMessageBody,
			}
			return {
				...state,
				messageData: [...state.messageData, newMessage],
				newMessageBody: '',
			}
		default:
			return state
	}
}

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = text => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newBody: text,
})

export default dialogsReducer
