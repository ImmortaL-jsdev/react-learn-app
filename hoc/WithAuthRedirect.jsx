import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const withAuthRedirect = WrappedComponent => {
	return props => {
		const isAuth = useSelector(state => state.auth.isAuth)

		if (!isAuth) {
			return <Navigate to='/login' />
		}

		return <WrappedComponent {...props} />
	}
}

export default withAuthRedirect
