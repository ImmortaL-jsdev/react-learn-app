import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { setUserProfileAC } from '../../src/redux/profileReducer'
import axios from 'axios'

const ProfileContainer = () => {
	const { userId } = useParams() // Получаем userId из URL
	const profile = useSelector(state => state.profilePage.profile)
	const dispatch = useDispatch()

	const setUserProfile = profile => {
		dispatch(setUserProfileAC(profile))
	}

	const fetchUserProfile = async () => {
		try {
			const response = await axios.get(
				`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
			)
			setUserProfile(response.data)
		} catch (error) {
			console.error('Ошибка при получении профиля пользователя:', error)
		}
	}

	useEffect(() => {
		fetchUserProfile()
	}, [userId]) // Добавить userId в зависимости, чтобы запускать запрос при его изменении

	return <Profile profile={profile} />
}

export default ProfileContainer
