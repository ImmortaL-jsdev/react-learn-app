import s from '../ProfileInfo/ProfileInfo.module.css'
import React, { useState } from 'react'
const ProfileStatus = ({ profile }) => {
	const [editMode, setEditMode] = useState(false)
	const [aboutMe, setAboutMe] = useState(
		profile?.aboutMe || 'Нет информации о себе',
	)

	const handleEditMode = () => {
		setEditMode(!editMode)
	}
	const handleChange = e => {
		setAboutMe(e.target.value)
	}
	return (
		<div className={s.aboutMeWrapper}>
			{!editMode ? (
				<div>
					<span>{aboutMe}</span>
					<button onClick={handleEditMode}>Edit</button>
				</div>
			) : (
				<div>
					<input type='text' value={aboutMe} onChange={handleChange} />
					<button onClick={handleEditMode}>Сохранить</button>{' '}
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
