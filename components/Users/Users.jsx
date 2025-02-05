import { useEffect } from 'react'
import s from '../Users/Users.module.css'

const Users = props => {
	useEffect(() => {
		if (props.users.length === 0) {
			props.setUsers([
				{
					id: 1,
					fullName: 'Peter',
					age: '21',
					avatarUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTLhfdkuzPiOnl9wfnneG9l-bOM-YR53JCQ&s',
					status: 'Hola',
					location: { countryName: 'Russia', cityName: 'Moscow' },
					followed: true,
				},
				{
					id: 2,
					fullName: 'Nicolas',
					age: '20',
					avatarUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTLhfdkuzPiOnl9wfnneG9l-bOM-YR53JCQ&s',
					status: 'Yo',
					location: { countryName: 'Switzerland', cityName: 'Zurich' },
					followed: false,
				},
			])
		}
	}, [props.users.length]) // Зависимость от длины users
	return (
		<>
			<div className=''>
				{props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<img src={u.avatarUrl} className={s.usersAvatar} />
							</div>
							<div>
								{u.followed ? (
									<button
										onClick={() => {
											props.unfollow(u.id)
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											props.follow(u.id)
										}}
									>
										Follow
									</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div className=''>{u.fullName}</div>
								<div className=''>{u.age}</div>
								<div className=''>{u.status}</div>
							</span>
							<span>
								<div className=''>{u.location.countryName}</div>
								<div className=''>{u.location.cityName}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		</>
	)
}
export default Users
