let rerenderEntireTree = () => {}

let state = {
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
			{ id: 3, message: 'Who are you fucking nigga, why are you kidding me?' },
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
}
window.state = state
export const addPost = postMessage => {
	let newPost = {
		id: 7,
		post: state.profilePage.newPostText,
		likesCount: 0,
	}
	state.profilePage.postData.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}
export const updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export const subscribe = observer => {
	rerenderEntireTree = observer
}

export default state
