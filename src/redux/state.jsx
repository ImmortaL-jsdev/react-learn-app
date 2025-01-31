let rerenderEntireTree = () => {}

let store = {
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
			messageData: [
				{ id: 1, message: 'Hello' },
				{ id: 2, message: 'How are you' },
				{
					id: 3,
					message: 'Who are you fucking nigga, why are you kidding me?',
				},
				{ id: 4, message: 'Hola amigo, tu hablas espanol?' },
				{ id: 5, message: 'Yo, I am Fiona' },
				{ id: 6, message: 'My name is Raze' },
			],
			dialogsData: [
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Alex' },
				{ id: 3, name: 'Ben' },
				{ id: 4, name: 'Peter' },
				{ id: 5, name: 'Fiona' },
				{ id: 6, name: 'Raze' },
			],
		},
	},
	getState() {
		return this._state
	},

	callSubscriber() {
		console.log('state changed')
	},
	addPost() {
		let newPost = {
			id: 7,
			post: this._state.profilePage.newPostText,
			likesCount: 0,
		}
		this._state.profilePage.postData.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
}

window.store = store
export default store
