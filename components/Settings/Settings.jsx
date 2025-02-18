import React from 'react'
import s from '../Settings/Settings.module.css'
import withAuthRedirect from '../../hoc/WithAuthRedirect.jsx'
const Settings = () => {
	return (
		<>
			<div className={s.content}>Setings</div>
		</>
	)
}
export default withAuthRedirect(Settings)
