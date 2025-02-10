import { act } from 'react'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 50,
	currentPage: 1,
	isFetching: false,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return { ...state, users: action.payload }
		case 'FOLLOW':
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ? { ...user, followed: true } : user,
				),
			}
		case 'UNFOLLOW':
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
export default usersReducer
