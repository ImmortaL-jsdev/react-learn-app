import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true, // Убедитесь, что вы добавили этот параметр
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
