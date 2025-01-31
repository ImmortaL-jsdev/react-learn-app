import { act } from 'react'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const rerenderEntireTree = () => {}

const store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, post: 'Hi, how are you?', likesCount: 54 },
				{ id: 2, post: "It's my first post", likesCount: 123 },
				{ id: 3, post: "It's my second post", likesCount: 1234124 },
				{ id: 4, post: "It's my third post", likesCount: 634 },
				{ id: 5, post: "It's my fourth post", likesCount: 2145125 },
				{ id: 6, post: "It's my fifth post", likesCount: 11 },
			],
			newPostText: '',
		},
		messagesPage: {
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
				{ id: 2, message: 'How are you' },
				{
					id: 3,
					message: 'Who are you nigga, why are you kidding me?',
				},
				{ id: 4, message: 'Hola amigo, tu hablas espanol?' },
				{ id: 5, message: 'Yo, I am Fiona' },
				{ id: 6, message: 'My name is Raze' },
			],
			newMessageBody: ' ',
		},
	},

	callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			// this.addPost() // Вызов метода addPost
			let newPost = {
				id: Date.now(),
				post: this._state.profilePage.newPostText,
				likesCount: 0,
			}
			this._state.profilePage.postData.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.messagesPage.newMessageBody = action.body
			this._callSubscriber(this._state)
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.messagesPage.newMessageBody
			this._state.messagesPage.newMessageBody = ''
			this._state.messagesPage.messageData.push({
				id: 7,
				message: body,
			})
			this._callSubscriber(this._state)
		}
	},
}
export const addPostActionCreator = () => ({
	type: ADD_POST,
})

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newBody: body,
})

window.store = store
export default store
