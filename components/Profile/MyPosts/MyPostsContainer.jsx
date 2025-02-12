import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../src/redux/profileReducer.jsx'
import MyPosts from './MyPosts.jsx'

const MyPostsContainer = () => {
	const postData = useSelector(state => state.profilePage.postData)
	const newPostText = useSelector(state => state.profilePage.newPostText)

	const dispatch = useDispatch()

	const updateNewPostText = text => {
		dispatch(updateNewPostTextActionCreator(text))
	}

	const addPost = () => {
		dispatch(addPostActionCreator())
	}
	const onPostChange = e => {
		updateNewPostText(e.target.value) // Ensure this is being called correctly
	}
	// const handleLike = postId => {
	// 	dispatch(likePostActionCreator(postId))
	// }

	return (
		<MyPosts
			postData={postData}
			newPostText={newPostText}
			updateNewPostText={updateNewPostText}
			addPost={addPost}
			onPostChange={onPostChange}
		/>
	)
}

export default MyPostsContainer
