import { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUserDataAC } from '../../src/redux/authReducer' // Не забудьте импортировать ваш action creator
import React from 'react'
import { getAuthMe } from '../../API/allApi'

const HeaderContainer = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const login = useSelector(state => state.auth.login)

	const dispatch = useDispatch()

	const setUserData = userData => {
		dispatch(setUserDataAC(userData)) // передаем корректные данные
	}

	const fetchAuthMe = async () => {
		try {
			const response = await getAuthMe()
			if (response && response.resultCode === 0) {
				const { id, login, email } = response.data
				setUserData({ id, login, email })
			} else {
				console.log('Вы не авторизованы')
			}
		} catch (error) {
			console.error('Ошибка при получении данных', error)
		}
	}

	useEffect(() => {
		fetchAuthMe()
	}, [])

	return <Header isAuth={isAuth} login={login} />
}

export default HeaderContainer
