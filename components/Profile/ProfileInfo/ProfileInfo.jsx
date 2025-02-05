import s from '../ProfileInfo/ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<>
			<div className={s.profile_info}>
				<div>
					<img className={s.avatar} src='src\assets\avatar.jpeg' alt='avatar' />
				</div>
				<div className={s.description_block}></div>
			</div>
		</>
	)
}
export default ProfileInfo
