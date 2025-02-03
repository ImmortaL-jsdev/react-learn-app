import { useState } from 'react'
import s from '../Post/Post.module.css'

const Post = props => {
	const [likesCount, setLikesCount] = useState(0)
	const [disLikesCount, setDisLikesCount] = useState(0)

	return (
		<>
			<div className={s.item}>
				<img src='src\assets\5199484222128122135.jpg' alt='' />
				{props.message}
				<div className={s.likesCount}>
					<button
						className={s.addLike}
						onClick={() => {
							setLikesCount(likesCount + 1)
						}}
					>
						&#128077; like
					</button>
					<span>{likesCount} likes</span>
					<button
						className={s.addLike}
						onClick={() => {
							setDisLikesCount(disLikesCount + 1)
						}}
					>
						&#128078; dislike
					</button>
					<span>{disLikesCount} dislikes</span>
				</div>
			</div>
		</>
	)
}
export default Post
