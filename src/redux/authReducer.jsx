import { getAuthMe } from '../../api/allApi'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data, isAuth: true }

		default:
			return state
	}
}

export const setUserDataAC = userData => ({
	type: SET_USER_DATA,
	data: userData,
})

export const fetchAuthMeThunk = userData => async dispatch => {
	try {
		const response = await getAuthMe(userData)
		if (response && response.resultCode === 0) {
			const { id, login, email } = response.data
			dispatch(setUserDataAC({ id, login, email }))
		} else {
			console.log('Вы не авторизованы')
		}
	} catch (error) {
		console.error('Ошибка при получении данных', error)
	}
}

export default authReducer
