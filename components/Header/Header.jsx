import s from '../Header/Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = ({ login, isAuth }) => {
	return (
		<header className={s.header}>
			<div className={s.profileHeader}>
				<a href='/home'>SoWork</a>
				<div className={s.loginBlock}>
					{isAuth ? login : <NavLink to='/login'>Login</NavLink>}
				</div>
			</div>
		</header>
	)
}

export default Header
