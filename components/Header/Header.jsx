import s from '../Header/Header.module.css'
const Header = () => {
	return (
		<>
			<header className={s.header}>
				<div className={s.profile__header}>
					<a href='/home'>SoWork</a>
				</div>
			</header>
		</>
	)
}
export default Header
