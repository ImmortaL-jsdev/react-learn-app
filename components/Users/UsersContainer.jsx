import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	followUserThunk,
	unfollowUserThunk,
	fetchUsersThunk,
} from '../../src/redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader'
import withAuthRedirect from '../../hoc/WithAuthRedirect.jsx'

const UsersContainer = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.users || [])
	const pageSize = useSelector(state => state.users.pageSize)
	const totalUsersCount = useSelector(state => state.users.totalUsersCount)
	const currentPage = useSelector(state => state.users.currentPage)
	const isFetching = useSelector(state => state.users.isFetching)
	const isButtonDisabled = useSelector(state => state.users.isButtonDisabled)
	const isAuth = useSelector(state => state.auth.isAuth)

	useEffect(() => {
		dispatch(fetchUsersThunk(currentPage, pageSize))
	}, [dispatch, currentPage, pageSize])

	const onPageChanged = pageNumber => {
		dispatch(fetchUsersThunk(pageNumber, pageSize))
	}

	const fetchFollow = userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}
		dispatch(followUserThunk(userId))
	}

	const fetchUnFollow = userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}
		dispatch(unfollowUserThunk(userId))
	}

	return (
		<>
			<Preloader isFetching={isFetching} isButtonDisabled={isButtonDisabled} />
			<Users
				users={users}
				pageSize={pageSize}
				totalUsersCount={totalUsersCount}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				fetchFollow={fetchFollow}
				fetchUnFollow={fetchUnFollow}
				isFetching={isFetching}
				isAuth={isAuth}
				isButtonDisabled={isButtonDisabled}
			/>
		</>
	)
}

export default withAuthRedirect(UsersContainer)
