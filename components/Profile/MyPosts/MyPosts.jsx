import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../src/redux/state'

const MyPosts = props => {
	let postElements = props.postData.map((post, index) => (
		<Post key={post.id} message={post.post} likesCount={post.likesCount} />
	))

	let newPostElement = React.createRef()

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action)
	}
	return (
		<div className='content'>
			<h3 className={s.posts_block}>My posts</h3>
			<div className={s.new_post_form}>
				<textarea
					onChange={onPostChange}
					ref={newPostElement}
					value={props.newPostText}
				/>
				<button onClick={addPost}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>{postElements}</div>
		</div>
	)
}

export default MyPosts
