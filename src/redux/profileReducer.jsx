const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	postData: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 54 },
		{ id: 2, post: "It's my first post", likesCount: 123 },
		{ id: 3, post: "It's my second post", likesCount: 1234124 },
		{ id: 4, post: "It's my third post", likesCount: 634 },
		{ id: 5, post: "It's my fourth post", likesCount: 2145125 },
		{ id: 6, post: "It's my fifth post", likesCount: 11 },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		case ADD_POST:
			const newPost = {
				id: state.postData.length + 1,
				post: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				postData: [...state.postData, newPost],
				newPostText: '',
			}
		default:
			return state
	}
}
export const addPostActionCreator = () => ({
	type: ADD_POST,
})

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export default profileReducer
