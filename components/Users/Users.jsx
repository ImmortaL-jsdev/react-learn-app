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
}) => {
	if (!Array.isArray(users)) {
		return <div>Ошибка: users не является массивом.</div>
	}

	if (users.length === 0) {
		return <div>Пользователи не найдены</div>
	}

	let pagesCount = Math.ceil(totalUsersCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	// Логика для отображения страниц
	const displayedPages = pages.slice(
		Math.max(0, currentPage - 2),
		Math.min(pagesCount, currentPage + 1),
	)

	return (
		<div>
			<div className={s.pagination}>
				<span
					className={currentPage > 1 ? '' : s.isDisabled}
					onClick={() => currentPage > 1 && onPageChanged(currentPage - 1)}
				>
					&laquo;
				</span>

				{displayedPages[0] > 1 && (
					<span onClick={() => onPageChanged(1)}>1</span>
				)}
				{displayedPages[0] > 2 && <span>...</span>}
				{displayedPages.map(p => (
					<span
						key={p}
						className={currentPage === p ? s.selectedPage : undefined}
						onClick={() => onPageChanged(p)}
					>
						{p}
					</span>
				))}
				{displayedPages[displayedPages.length - 1] < pagesCount - 1 && (
					<span>...</span>
				)}
				{displayedPages[displayedPages.length - 1] < pagesCount && (
					<span onClick={() => onPageChanged(pagesCount)}>{pagesCount}</span>
				)}
				<span
					className={currentPage < pagesCount ? '' : s.isDisabled}
					onClick={() =>
						currentPage < pagesCount && onPageChanged(currentPage + 1)
					}
				>
					&raquo;
				</span>
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
