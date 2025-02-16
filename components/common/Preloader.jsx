import React from 'react'
import s from './Preloader.module.css'

const Preloader = ({ isFetching, isButtonDisabled }) => {
	return (
		<>
			{isFetching || isButtonDisabled ? (
				<div className={s.spinner}></div>
			) : null}
		</>
	)
}
export default Preloader
