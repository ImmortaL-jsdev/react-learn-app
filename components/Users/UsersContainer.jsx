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
import { getUsers } from '../../API/allApi'
import { setUserDataAC } from '../../src/redux/authReducer' // Импортируйте ваш action creator
import axios from 'axios'

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

	// Функция для подписки
	const fetchFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return // Если пользователь не авторизован, выходим из функции
		}
		try {
			const response = await axios.post(
				`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
				{},
				{
					withCredentials: true,
					headers: {
						'API-KEY': '853f33e5-2f98-4f05-a6b3-84f7c1c75fbd',
					},
				},
			)

			if (response.status === 200 && response.data.resultCode === 0) {
				follow(userId)
			} else {
				console.error('Ошибка:', response.data.messages[0])
			}
		} catch (error) {
			console.error('Ошибка при подписке:', error.message)
		}
	}

	// Функция для отмены подписки
	const fetchUnFollow = async userId => {
		if (!isAuth) {
			console.warn('Пользователь не авторизован')
			return // Если пользователь не авторизован, выходим из функции
		}
		try {
			const response = await axios.delete(
				`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
				{
					withCredentials: true,
				},
			)

			if (response.data.resultCode === 0) {
				unfollow(userId) // Обновляем состояние Redux
			} else {
				console.log('Ошибка:', response.data.messages[0])
			}
		} catch (error) {
			console.error('Ошибка при отмене подписки:', error)
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
