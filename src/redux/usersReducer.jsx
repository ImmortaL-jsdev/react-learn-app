import { fetchFollowUser, fetchUnFollowUser, getUsers } from '../../api/allApi'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_BUTTON_DISABLED = 'TOGGLE_IS_BUTTON_DISABLED'

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 50,
	currentPage: 1,
	isFetching: false,
	isButtonDisabled: false,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return { ...state, users: action.payload }
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ? { ...user, followed: true } : user,
				),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ? { ...user, followed: false } : user,
				),
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_BUTTON_DISABLED:
			return {
				...state,
				isButtonDisabled: action.isDisabled,
			}
		default:
			return state
	}
}

// Action creators
export const followAC = userId => ({
	type: FOLLOW,
	userId,
})

export const unfollowAC = userId => ({
	type: UNFOLLOW,
	userId,
})

export const setUsersAC = users => ({
	type: SET_USERS,
	payload: users,
})

export const setCurrentPageAC = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

export const setTotalUsersCountAC = count => ({
	type: SET_TOTAL_USERS_COUNT,
	count,
})

export const tougleIsFetchingAC = isFetching => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})

export const toggleIsButtonDisabledAC = isDisabled => ({
	type: TOGGLE_IS_BUTTON_DISABLED,
	isDisabled,
})

export const fetchUsersThunk = (pageNumber, pageSize) => async dispatch => {
	dispatch(tougleIsFetchingAC(true)) // Устанавливаем состояние загрузки
	dispatch(setCurrentPageAC(pageNumber))
	try {
		const response = await getUsers(pageNumber, pageSize)
		dispatch(setUsersAC(response.items)) // Устанавливаем пользователей
		dispatch(setTotalUsersCountAC(response.totalCount)) // Устанавливаем общее количество пользователей
	} catch (error) {
		console.error('Ошибка при получении пользователей:', error.message)
	} finally {
		dispatch(tougleIsFetchingAC(false)) // Сбрасываем состояние загрузки
	}
}

export const followUserThunk = userId => async dispatch => {
	dispatch(toggleIsButtonDisabledAC(true))
	try {
		const success = await fetchFollowUser(userId)
		if (success) {
			dispatch(followAC(userId))
		} else {
			console.error('Не удалось подписаться')
		}
	} catch (error) {
		console.error('Ошибка при подписке:', error.message)
	} finally {
		dispatch(toggleIsButtonDisabledAC(false))
	}
}

export const unfollowUserThunk = userId => async dispatch => {
	dispatch(toggleIsButtonDisabledAC(true))
	try {
		const success = await fetchUnFollowUser(userId)
		if (success) {
			dispatch(unfollowAC(userId))
		} else {
			console.error('Не удалось отменить подписку')
		}
	} catch (error) {
		console.error('Ошибка при отмене подписки:', error.message)
	} finally {
		dispatch(toggleIsButtonDisabledAC(false))
	}
}

export default usersReducer
