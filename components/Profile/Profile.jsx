import s from '../Profile/Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<>
			<div className={s.profile}>
				<ProfileInfo />
				<MyPostsContainer
					postData={props.profilePage.postData}
					newPostText={props.profilePage.newPostText}
					dispatch={props.dispatch}
				/>
			</div>
		</>
	)
}
export default Profile
