import s from '../Post/Post.module.css'

const Post = props => {
	return (
		<>
			<div className={s.item}>
				<img src='src\assets\5199484222128122135.jpg' alt='' />
				{props.message}
				<div className={s.likesCount}>
					<span>{props.likesCount} likes</span>
				</div>
			</div>
		</>
	)
}
export default Post
