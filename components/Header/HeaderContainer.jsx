import { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUserDataAC } from '../../src/redux/authReducer' // Не забудьте импортировать ваш action creator

const HeaderContainer = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const login = useSelector(state => state.auth.login)

	const dispatch = useDispatch()

	const setUserData = userData => {
		dispatch(setUserDataAC(userData)) // передаем корректные данные
	}

	const fetchAuthMe = async () => {
		try {
			const response = await axios.get(
				`https://social-network.samuraijs.com/api/1.0/auth/me`,
				{ withCredentials: true },
			)
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data

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
