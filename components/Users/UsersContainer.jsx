import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	tougleIsFetchingAC,
} from '../../src/redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader'
import { followUser, getUsers, unfollowUser } from '../../API/allApi'

const UsersContainer = () => {
	const users = useSelector(state => state.users.users || [])
	const pageSize = useSelector(state => state.users.pageSize)
	const totalUsersCount = useSelector(state => state.users.totalUsersCount)
	const currentPage = useSelector(state => state.users.currentPage)
	const isFetching = useSelector(state => state.users.isFetching)
	const isAuth = useSelector(state => state.auth.isAuth) // Получаем статус аутентификации
	const dispatch = useDispatch()

	const follow = userId => {
		dispatch(followAC(userId))
	}

	const unfollow = userId => {
		dispatch(unfollowAC(userId))
	}

	const setUsers = users => {
		dispatch(setUsersAC(users))
	}

	const setCurrentPage = pageNumber => {
		dispatch(setCurrentPageAC(pageNumber))
	}

	const setTotalUsersCount = totalCount => {
		dispatch(setTotalUsersCountAC(totalCount))
	}

	const tougleIsFetching = isFetching => {
		dispatch(tougleIsFetchingAC(isFetching))
	}

	const onPageChanged = async pageNumber => {
		setCurrentPage(pageNumber)
		tougleIsFetching(true)
		try {
			const response = await getUsers(pageNumber, pageSize)
			setUsers(response.items)
			setTotalUsersCount(response.totalCount)
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		} finally {
			tougleIsFetching(false)
		}
	}

	const fetchUsers = async () => {
		tougleIsFetching(true)
		try {
			const response = await getUsers(currentPage, pageSize)
			setUsers(response.items)
			setTotalUsersCount(response.totalCount)
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		} finally {
			tougleIsFetching(false)
		}
	}

	useEffect(() => {
		if (!Array.isArray(users) || users.length === 0) {
			fetchUsers() // Загружаем пользователей только если users не массив или пуст
		}
	}, [users])

	const fetchFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}
		try {
			const success = await followUser(userId)
			if (success) {
				follow(userId)
			} else {
				console.error('Ошибка: Не удалось подписаться')
			}
		} catch (error) {
			console.error('Ошибка при подписке:', error.message)
		}
	}

	const fetchUnFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return
		}
		try {
			const success = await unfollowUser(userId)
			if (success) {
				unfollow(userId)
			} else {
				console.log('Ошибка: Не удалось отменить подписку')
			}
		} catch (error) {
			console.error('Ошибка при отмене подписки:', error.message)
		}
	}

	return (
		<>
			<Preloader isFetching={isFetching} />
			<Users
				users={users}
				pageSize={pageSize}
				totalUsersCount={totalUsersCount}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				fetchFollow={fetchFollow}
				fetchUnFollow={fetchUnFollow}
			/>
		</>
	)
}

export default UsersContainer
