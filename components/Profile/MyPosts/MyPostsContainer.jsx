import { connect } from 'react-redux'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../src/redux/profileReducer.jsx'
import MyPosts from './MyPosts.jsx'

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
