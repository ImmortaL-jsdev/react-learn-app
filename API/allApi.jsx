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

export const followUser = async userId => {
	try {
		const response = await apiClient.post(`/follow/${userId}`, {})
		return response.data.resultCode === 0
	} catch (error) {
		console.error('Error following user:', error.message)
		throw error
	}
}

export const unfollowUser = async userId => {
	try {
		const response = await apiClient.delete(`/follow/${userId}`)
		return response.data.resultCode === 0
	} catch (error) {
		console.error('Error unfollowing user:', error.message)
		throw error
	}
}
export const getAuthMe = async () => {
	try {
		const response = await apiClient.get('/auth/me')
		if (response.data && response.data.resultCode !== undefined) {
			return response.data // повернем все данные, а не только resultCode
		} else {
			console.log('Вы не авторизованы')
			return null // возвращаем null в случае неуспеха
		}
	} catch (error) {
		console.error('Ошибка при получении данных', error)
		return null // возвращаем null в случае ошибки
	}
}
