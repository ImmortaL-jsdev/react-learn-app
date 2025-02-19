import s from '../ProfileInfo/ProfileInfo.module.css'
import React from 'react'
import ProfileStatus from './ProfileStatus'
const ProfileInfo = ({ profile }) => {
	return (
		<div className={s.profileInfo}>
			<div className={s.descriptionBlock}>
				{profile && profile.photos ? (
					<img src={profile.photos.large} alt='' />
				) : (
					<p>Данных нет</p>
				)}

				<ProfileStatus profile={profile} />

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
