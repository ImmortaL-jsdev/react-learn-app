const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
	postData: [],
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
