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

// Action creators

export const setUserDataAC = userData => ({
	type: SET_USER_DATA,
	data: userData,
})
export default authReducer
