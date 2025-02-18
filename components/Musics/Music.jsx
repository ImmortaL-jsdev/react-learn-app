import React from 'react'
import s from '../Musics/Music.module.css'
import withAuthRedirect from '../../hoc/WithAuthRedirect.jsx'
const Music = () => {
	return (
		<>
			<div className={s.content}>Music</div>
		</>
	)
}
export default withAuthRedirect(Music)
