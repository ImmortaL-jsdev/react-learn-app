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
import axios from 'axios'

import Preloader from '../common/Preloader'
import { useParams } from 'react-router-dom'
import { getUsers } from '../../API/allApi'

const UsersContainer = () => {
	const users = useSelector(state => state.users.users || []) // Получаем массив пользователей из Redux
	const pageSize = useSelector(state => state.users.pageSize)
	const totalUsersCount = useSelector(state => state.users.totalUsersCount)
	const currentPage = useSelector(state => state.users.currentPage)
	const isFetching = useSelector(state => state.users.isFetching)

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
			tougleIsFetching(false)
		} catch (error) {
			tougleIsFetching(false)
			console.error('Ошибка при получении пользователей:', error.message)
		}
	}

	const fetchUsers = async () => {
		tougleIsFetching(true)
		try {
			const response = await getUsers(currentPage, pageSize)
			setUsers(response.items)
			setTotalUsersCount(response.totalCount)
			tougleIsFetching(false)
		} catch (error) {
			tougleIsFetching(false)
			console.error('Ошибка при получении пользователей:', error.message)
		}
	}

	useEffect(() => {
		if (!Array.isArray(users) || users.length === 0) {
			fetchUsers() // Загружаем пользователей только если users не массив или пуст
		}
	}, [users])

	return (
		<>
			<Preloader isFetching={isFetching} />
			<Users
				users={users}
				follow={follow}
				unfollow={unfollow}
				pageSize={pageSize}
				totalUsersCount={totalUsersCount}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				onPageChanged={onPageChanged}
				isFetching={isFetching}
			/>
		</>
	)
}

export default UsersContainer
