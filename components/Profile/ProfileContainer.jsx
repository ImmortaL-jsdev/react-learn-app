import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import { setUserProfileAC } from '../../src/redux/profileReducer'
import axios from 'axios'

const ProfileContainer = () => {
	const profile = useSelector(state => state.profilePage.profile)

	const dispatch = useDispatch()

	const setUserProfile = profile => {
		dispatch(setUserProfileAC(profile))
	}

	const fetchUserProfile = async () => {
		try {
			const response = await axios.get(
				'https://social-network.samuraijs.com/api/1.0/profile/2',
			)
			setUserProfile(response.data)
		} catch (error) {
			console.error('Ошибка при получении профиля пользователя:', error)
		}
	}

	useEffect(() => {
		fetchUserProfile()
	}, []) // Пустой массив зависимостей означает, что функция вызывается при монтировании

	return <Profile profile={profile} />
}

export default ProfileContainer
