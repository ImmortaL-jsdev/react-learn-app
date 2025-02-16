import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	followUserThunk,
	unfollowUserThunk,
	fetchUsersThunk,
} from '../../src/redux/usersReducer' // Импортируйте ваши thunks
import Users from './Users'
import Preloader from '../common/Preloader'

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
		dispatch(fetchUsersThunk(currentPage, pageSize)) // Используем thunk для получения пользователей
	}, [dispatch, currentPage, pageSize]) // Добавьте зависимости для вызова при изменении страницы

	const onPageChanged = pageNumber => {
		dispatch(fetchUsersThunk(pageNumber, pageSize)) // Используем thunk для получения пользователей
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
				isButtonDisabled={isButtonDisabled}
			/>
		</>
	)
}

export default UsersContainer
