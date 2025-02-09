import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
} from '../../src/redux/usersReducer'
import Users from './Users'
import axios from 'axios'

const UsersContainer = () => {
	const users = useSelector(state => state.users.users || []) // Получаем массив пользователей из Redux
	const pageSize = useSelector(state => state.users.pageSize)
	const totalUsersCount = useSelector(state => state.users.totalUsersCount)
	const currentPage = useSelector(state => state.users.currentPage)

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

	let onPageChanged = async pageNumber => {
		setCurrentPage(pageNumber)
		try {
			const response = await axios.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
			)

			// Проверяем, что response.data.items - это массив
			if (Array.isArray(response.data.items)) {
				setUsers(response.data.items)
				setTotalUsersCount(response.data.totalCount)
			} else {
				console.error('Ошибка: items не является массивом', response.data.items)
			}
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		}
	}

	const fetchUsers = async () => {
		try {
			const response = await axios.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
			)

			// Проверяем, что response.data.items - это массив
			if (Array.isArray(response.data.items)) {
				setUsers(response.data.items)
			} else {
				console.error('Ошибка: items не является массивом', response.data.items)
			}
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message)
		}
	}

	useEffect(() => {
		if (!Array.isArray(users) || users.length === 0) {
			fetchUsers() // Загружаем пользователей только если users не массив или пуст
		}
	}, [users])

	return (
		<Users
			users={users}
			follow={follow}
			unfollow={unfollow}
			pageSize={pageSize}
			totalUsersCount={totalUsersCount}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			onPageChanged={onPageChanged}
		/>
	)
}

export default UsersContainer
