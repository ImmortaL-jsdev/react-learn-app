import { act } from 'react'
import { getUserProfile } from '../../api/allApi'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
	postData: [],
	newPostText: '',
	profile: null,
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
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

export const setUserProfileAC = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

export const fetchUserProfileThunk = userId => async dispatch => {
	try {
		const profileData = await getUserProfile(userId) // Вызов getUserProfile и ожидание результата
		if (profileData) {
			dispatch(setUserProfileAC(profileData)) // Передаем данные профиля в setUserProfileAC
		}
	} catch (error) {
		console.error('Ошибка при получении профиля пользователя:', error)
		return null
	}
}

export default profileReducer
