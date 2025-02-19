import s from '../ProfileInfo/ProfileInfo.module.css'
import React, { useState, useEffect } from 'react'
import { putUserStatus, getUserStatus } from '../../../API/allApi'

const ProfileStatus = ({ profile }) => {
	const [editMode, setEditMode] = useState(false)
	const [aboutMe, setAboutMe] = useState('Нет информации о себе')

	useEffect(() => {
		const fetchUserStatus = async () => {
			if (profile && profile.userId) {
				
				const status = await getUserStatus(profile.userId)
				setAboutMe(status || 'Нет информации о себе')
			}
		}
		fetchUserStatus()
	}, [profile])

	const handleEditMode = () => {
		setEditMode(!editMode)
	}

	const handleChange = e => {
		setAboutMe(e.target.value)
	}

	const handleSave = async () => {
		const result = await putUserStatus(aboutMe)
		if (result) {
			alert('Статус успешно обновлен')
		} else {
			alert('Ошибка при обновлении статуса')
		}
		setEditMode(false)
	}

	const specialCaseUserId = 32151

	if (!profile) {
		return <div>Загрузка...</div> 
	}

	return (
		<div className={s.aboutMeWrapper}>
			{editMode ? (
				<div>
					<input type='text' value={aboutMe} onChange={handleChange} />
					<button onClick={handleSave}>Сохранить</button>
					<button onClick={handleEditMode}>Отмена</button>
				</div>
			) : (
				<>
					{profile.userId === specialCaseUserId ? (
						<div>
							<span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
								{aboutMe}
							</span>
							<button onClick={handleEditMode}>Редактировать</button>
						</div>
					) : (
						<span>{aboutMe}</span>
					)}
				</>
			)}
		</div>
	)
}

export default ProfileStatus
