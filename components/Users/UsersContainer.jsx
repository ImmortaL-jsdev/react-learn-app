import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../src/redux/usersReducer'
import Users from './Users'
import axios from 'axios'

const UsersContainer = () => {
	const users = useSelector(state => state.users.users) // Получаем массив пользователей из Redux
	const dispatch = useDispatch()

	// Функция для подписки
	const follow = userId => {
		dispatch(followAC(userId))
	}

	// Функция для отписки
	const unfollow = userId => {
		dispatch(unfollowAC(userId))
	}

	// Функция для установки пользователей в Redux
	const setUsers = users => {
		dispatch(setUsersAC(users))
	}

	// Загрузка пользователей из API
	const fetchUsers = async () => {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users',
			)
			setUsers(response.data) // Установка пользователей в Redux
		} catch (error) {
			console.error('Ошибка при получении пользователей:', error.message) // Обработка ошибок
		}
	}

	// Загрузка пользователей только при первом рендере, если данные отсутствуют
	useEffect(() => {
		if (users.length === 0) {
			fetchUsers()
		}
	}, [users.length]) // Проверка на наличие пользователей в стейте

	return (
		<Users
			users={users}
			follow={follow}
			unfollow={unfollow}
			setUsers={setUsers}
		/>
	)
}

export default UsersContainer
