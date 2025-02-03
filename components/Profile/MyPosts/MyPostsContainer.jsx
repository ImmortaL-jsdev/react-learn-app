import React from 'react'
import { connect } from 'react-redux'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../src/redux/profileReducer.jsx'
import MyPosts from './MyPosts.jsx'

const MyPostsContainer = props => {
	return (
		<MyPosts
			updateNewPostText={props.updateNewPostText}
			addPost={props.addPost}
			postData={props.postData}
			newPostText={props.newPostText}
		/>
	)
}
const mapStateToProps = state => ({
	postData: state.profilePage.postData,
	newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => {
			dispatch(updateNewPostTextActionCreator(text))
		},
		addPost: () => dispatch(addPostActionCreator()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)
