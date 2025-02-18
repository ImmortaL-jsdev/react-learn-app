import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMeThunk } from '../../src/redux/authReducer'

const HeaderContainer = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const login = useSelector(state => state.auth.login)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isAuth) {
			dispatch(fetchAuthMeThunk())
		}
	}, [dispatch, isAuth])

	return <Header login={login} isAuth={isAuth} />
}

export default HeaderContainer
