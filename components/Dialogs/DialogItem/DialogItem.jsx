import React from 'react'
import s from '../DialogItem/DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/dialogs/' + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink
				to={path}
				className={navData => (navData.isActive ? s.active : s.item)}
			>
				{props.name}
			</NavLink>
		</div>
	)
}

export default DialogItem
