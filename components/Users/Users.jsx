import React from 'react'
import s from '../Users/Users.module.css'
import defaultAvatar from '../../src/assets/images.jpg'
import { NavLink } from 'react-router-dom'

const Users = ({
	users,
	pageSize,
	totalUsersCount,
	currentPage,
	onPageChanged,
	fetchFollow,
	fetchUnFollow,
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
				<div key={u.id} className={s.userProfile}>
					<span>
						<div>
							<NavLink to={`/profile/${u.id}`}>
								<img
									src={u.photos.small || defaultAvatar}
									className={s.usersAvatar}
									alt={u.name}
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => fetchUnFollow(u.id)}
									className={s.buttonUnFollow}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => fetchFollow(u.id)}
									className={s.buttonFollow}
								>
									Follow
								</button>
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
