import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { fetchUserProfileThunk } from '../../src/redux/profileReducer'

const ProfileContainer = () => {
	const { userId } = useParams() // Получаем userId из URL
	const profile = useSelector(state => state.profilePage.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserProfileThunk(userId))
	}, [dispatch])

	return <Profile profile={profile} />
}

export default ProfileContainer
