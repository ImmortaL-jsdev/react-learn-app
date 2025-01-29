import s from '../Header/Header.module.css'
const Header = () => {
	return (
		<>
			<header className={s.header}>
				<div className={s.profile__header}>
					<img
						className={s.header__img}
						src='/src/assets/wallpaper1.jpg'
						alt=''
					/>
				</div>
			</header>
		</>
	)
}
export default Header
