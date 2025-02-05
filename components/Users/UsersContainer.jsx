import { followAC, setUsersAC, unfollowAC } from '../../src/redux/usersReducer'
import Users from './Users'
import { connect } from 'react-redux'
let mapStateToProps = state => {
	return {
		users: state.users.users,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			dispatch(followAC(userId))
		},
		unfollow: userId => {
			dispatch(unfollowAC(userId))
		},
		setUsers: userId => {
			dispatch(setUsersAC(userId))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
