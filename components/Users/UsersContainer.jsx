import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	tougleIsFetchingAC,
	toggleIsButtonDisabledAC,
} from '../../src/redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader'
import { fetchFollowUser, getUsers, fetchUnFollowUser } from '../../api/allApi'

const UsersContainer = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.users || [])
	const pageSize = useSelector(state => state.users.pageSize)
	const totalUsersCount = useSelector(state => state.users.totalUsersCount)
	const currentPage = useSelector(state => state.users.currentPage)
	const isFetching = useSelector(state => state.users.isFetching)
	const isButtonDisabled = useSelector(state => state.users.isButtonDisabled)
	const isAuth = useSelector(state => state.auth.isAuth)

	const setUsers = users => {
		dispatch(setUsersAC(users))
	}

	const setCurrentPage = pageNumber => {
		dispatch(setCurrentPageAC(pageNumber))
	}

	const setTotalUsersCount = totalCount => {
		dispatch(setTotalUsersCountAC(totalCount))
	}

	const toggleIsFetching = isFetching => {
		dispatch(tougleIsFetchingAC(isFetching))
	}

	const toggleIsButtonDisabled = isDisabled => {
		dispatch(toggleIsButtonDisabledAC(isDisabled))
	}

	const onPageChanged = async pageNumber => {
		setCurrentPage(pageNumber)
		toggleIsFetching(true)
		try {
			const response = await getUsers(pageNumber, pageSize)
			setUsers(response.items)
			setTotalUsersCount(response.totalCount)
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		} finally {
			toggleIsFetching(false)
		}
	}

	const fetchUsers = async () => {
		toggleIsFetching(true)
		try {
			const response = await getUsers(currentPage, pageSize)
			setUsers(response.items)
			setTotalUsersCount(response.totalCount)
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		} finally {
			toggleIsFetching(false)
		}
	}

	useEffect(() => {
		if (!Array.isArray(users) || users.length === 0) {
			fetchUsers()
		}
	}, [users])

	const fetchFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}

		toggleIsButtonDisabled(true)
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
			toggleIsButtonDisabled(false)
		}
	}

	const fetchUnFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}

		toggleIsButtonDisabled(true)
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
			toggleIsButtonDisabled(false)
		}
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
				isButtonDisabled={isButtonDisabled} // Передаем isButtonDisabled
			/>
		</>
	)
}

export default UsersContainer
