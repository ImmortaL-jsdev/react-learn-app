import { useEffect } from 'react'
import s from '../Users/Users.module.css'
import axios from 'axios'

const Users = props => {
	useEffect(() => {
		// Получаем пользователей при монтировании компонента
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/users',
				)
				const users = Array.isArray(response.data) ? response.data : []
				props.setUsers(users)
			} catch (error) {
				console.error('Ошибка при получении пользователей:', error)
			}
		}
		fetchUsers()
	}, [props])

	return (
		<div>
			{props.users.length === 0 ? (
				<p>Нет пользователей для отображения.</p>
			) : (
				props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<img
									src={
										u.photos && u.photos.small
											? u.photos.small
											: 'src/assets/images.jpg'
									}
									className={s.usersAvatar}
									alt={u.name}
								/>
							</div>
							<div>
								{u.followed ? (
									<button onClick={() => props.unfollow(u.id)}>
										unsubscribed
									</button>
								) : (
									<button onClick={() => props.follow(u.id)}>subscribe</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div className=''>{u.name}</div>
								<div className=''>{u.age}</div>
								<div className=''>{u.status}</div>
							</span>
							<span>
								<div className=''>
									{u.location ? u.location.countryName : 'Неизвестная страна'}
								</div>
								<div className=''>
									{u.location ? u.location.cityName : 'Неизвестный город'}
								</div>
							</span>
						</span>
					</div>
				))
			)}
		</div>
	)
}

export default Users
