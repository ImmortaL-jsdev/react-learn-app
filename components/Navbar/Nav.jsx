import React from 'react'
import s from '../Navbar/Nav.module.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
	return (
		<>
			<nav className={s.nav}>
				<div className={s.item}>
					{' '}
					<NavLink
						to='/home'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Home
					</NavLink>
				</div>
				<div className={s.item}>
					{' '}
					<NavLink
						to='/profile/32151'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Profile
					</NavLink>
				</div>
				<div className={s.item}>
					{' '}
					<NavLink
						to='/dialogs'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Messages
					</NavLink>
				</div>
				<div className={s.item}>
					<NavLink
						to='/users'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Users
					</NavLink>
				</div>
				<div className={s.item}>
					{' '}
					<NavLink
						to='/music'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Music
					</NavLink>
				</div>

				<div className={s.item}>
					{' '}
					<NavLink
						to='/settings'
						className={navData => (navData.isActive ? s.active : s.item)}
					>
						Settings
					</NavLink>
				</div>
			</nav>
		</>
	)
}
export default NavBar
