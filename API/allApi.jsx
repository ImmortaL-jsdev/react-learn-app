import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

const apiClient = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		'API-KEY': '5ced7880-7610-4dcc-a45a-3c37bc01c4e6',
	},
})

export const getUsers = async (pageNumber, pageSize) => {
	try {
		const response = await apiClient.get('/users', {
			params: { page: pageNumber, count: pageSize },
		})
		if (Array.isArray(response.data.items)) {
			return {
				items: response.data.items,
				totalCount: response.data.totalCount,
			}
		} else {
			throw new Error('Response items is not an array')
		}
	} catch (error) {
		console.error('Error fetching users:', error.message)
		throw error
	}
}

export const fetchFollowUser = async userId => {
	try {
		await apiClient.post(`/follow/${userId}`)
		return true // Успех подписки
	} catch (error) {
		console.error('Ошибка при подписке:', error.message)
		return false // Ошибка подписки
	}
}

export const fetchUnFollowUser = async userId => {
	try {
		await apiClient.delete(`/follow/${userId}`)
		return true // Успех отмены подписки
	} catch (error) {
		console.error('Ошибка при отмене подписки:', error.message)
		return false // Ошибка отмены подписки
	}
}

export const getAuthMe = async userData => {
	try {
		const response = await apiClient.get('/auth/me')
		if (response.data && response.data.resultCode !== undefined) {
			return response.data
		} else {
			console.log('Вы не авторизованы')
			return null // Return null for failure
		}
	} catch (error) {
		console.error('Ошибка при получении данных', error)
		return null // Return null on error
	}
}

export const getUserProfile = async userId => {
	try {
		const response = await apiClient.get(`/profile/${userId}`)
		return response.data
	} catch (error) {
		console.error('Ошибка при получении профиля пользователя:', error)
		return null
	}
}
