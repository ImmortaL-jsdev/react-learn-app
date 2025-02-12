import s from '../ProfileInfo/ProfileInfo.module.css'
import React from 'react'
const ProfileInfo = ({ profile }) => {
	return (
		<div className={s.profileInfo}>
			{/* <div>
				<img className={s.avatar} src='src\assets\images.jpg' alt='avatar' />
			</div> */}

			<div className={s.descriptionBlock}>
				{profile && profile.photos ? (
					<img src={profile.photos.large} alt='' />
				) : (
					<p>Данных нет</p>
				)}

				{/* Проверяем наличие aboutMe */}
				<p>{profile ? profile.aboutMe : 'Информация о себе отсутствует'}</p>

				<h3>
					My contacts:
					<div className={s.myContacts}>
						{profile && profile.contacts ? (
							<>
								{profile.contacts.facebook && (
									<a href={profile.contacts.facebook}>Facebook </a>
								)}
								{profile.contacts.vk && <a href={profile.contacts.vk}>VK </a>}
								{profile.contacts.twitter && (
									<a href={profile.contacts.twitter}>Twitter </a>
								)}
								{profile.contacts.instagram && (
									<a href={profile.contacts.instagram}>Instagram </a>
								)}
								{profile.contacts.youtube && (
									<a href={profile.contacts.youtube}>YouTube </a>
								)}
								{profile.contacts.github && (
									<a href={profile.contacts.github}>GitHub </a>
								)}
							</>
						) : (
							<p>Контакты не найдены</p>
						)}
					</div>
				</h3>
			</div>
		</div>
	)
}

export default ProfileInfo
