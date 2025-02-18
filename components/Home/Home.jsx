import React from 'react'
import s from '../Home/Home.module.css'
import Post from '../Profile/MyPosts/Post/Post'
import withAuthRedirect from '../../hoc/WithAuthRedirect.jsx'

const Home = () => {
	return (
		<>
			<Post />
		</>
	)
}
export default withAuthRedirect(Home)
