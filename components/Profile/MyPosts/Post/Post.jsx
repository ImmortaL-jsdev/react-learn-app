import React from 'react'
import { useState } from 'react'
import s from '../Post/Post.module.css'

const Post = props => {
	return (
		<>
			<div className={s.item}>
				<img src='src\assets\5199484222128122135.jpg' alt='' />
				<p> {props.message}</p>
				<div className={s.likesCount}>
					<span>{props.likesCount} likes</span>
					<button className={s.addLike}>
						<img src='public\Vector.svg' />
					</button>
				</div>
			</div>
		</>
	)
}
export default Post
