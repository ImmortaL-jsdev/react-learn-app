import React from 'react'
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postData, updateNewPostText, addPost, newPostText }) => {
	const postElements = postData.map(post => (
		<Post key={post.id} message={post.post} likesCount={post.likesCount} />
	))

	const onPostChange = e => {
		updateNewPostText(e.target.value) // Ensure this is being called correctly
	}

	return (
		<div className='content'>
			<h3 className={s.posts_block}>My posts</h3>
			<div className={s.new_post_form}>
				<textarea onChange={onPostChange} value={newPostText} />
				<button onClick={addPost}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>{postElements}</div>
		</div>
	)
}

export default MyPosts
