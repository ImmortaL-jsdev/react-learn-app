import React from 'react'
import s from '../Users/Users.module.css'
import defaultAvatar from '../../src/assets/images.jpg'

const Users = ({
	users,
	follow,
	unfollow,
	pageSize,
	totalUsersCount,
	currentPage,
	onPageChanged,
	setTotalUsersCount,
}) => {
	if (!Array.isArray(users)) {
		return <div>Ошибка: users не является массивом.</div>
	}

	if (users.length === 0) {
		return <div>Пользователи не найдены.</div>
	}
	let pagesCount = Math.ceil(totalUsersCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div className='pagination'>
				{pages.map(p => (
					<span
						key={p} // Добавляем уникальный ключ для каждого элемента страницы
						className={currentPage === p ? s.selectedPage : undefined}
						onClick={e => onPageChanged(p)} // Теперь правильно передаем значение p
					>
						{p}{' '}
					</span>
				))}
			</div>
			{users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img
								src={u.photos.small || defaultAvatar}
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
							<div>{u.status || 'Статус не указан'}</div>
						</span>
						<span>
							<div>{u.location?.country || 'Неизвестная страна'}</div>
							<div>{u.address?.city || 'Неизвестный город'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
