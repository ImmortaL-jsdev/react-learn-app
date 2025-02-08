import React from 'react'
import s from '../Users/Users.module.css'
import defaultAvatar from '../../src/assets/images.jpg' // Импорт изображения

const Users = ({ users, follow, unfollow }) => {
	return (
		<div>
			{users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img
								src={
									u.photos && u.photos.small ? u.photos.small : defaultAvatar
								}
								className={s.usersAvatar}
								alt={u.name}
							/>
						</div>
						<div>
							{u.followed ? (
								<button onClick={() => unfollow(u.id)}>Unfollow</button>
							) : (
								<button onClick={() => follow(u.id)}>Follow</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.age ? u.age : 'Возраст не указан'}</div>
							<div>{u.status ? u.status : 'Статус не указан'}</div>
						</span>
						<span>
							<div>
								{u.location ? u.location.country : 'Неизвестная страна'}
							</div>
							<div>{u.address ? u.address.city : 'Неизвестный город'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
