import s from '../Profile/Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profile }) => {
	return (
		<>
			<div className={s.profile}>
				<ProfileInfo profile={profile} />
				<MyPostsContainer />
			</div>
		</>
	)
}
export default Profile
