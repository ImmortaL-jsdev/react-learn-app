import React from 'react'
import NavBar from '../components/Navbar/Nav.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Music from '../components/Musics/Music.jsx'
import Settings from '../components/Settings/Settings.jsx'
import { Provider, useSelector } from 'react-redux'
import DialogsContainer from '../components/Dialogs/DialogsContainer.jsx'
import Users from '../components/Users/Users.jsx'
import Home from '../components/Home/Home.jsx'
import UsersContainer from '../components/Users/UsersContainer.jsx'
import ProfileContainer from '../components/Profile/ProfileContainer.jsx'
import HeaderContainer from '../components/Header/HeaderContainer.jsx'
import Login from '../components/Login/Login.jsx'

const App = () => {
	const profilePage = useSelector(state => state.profilePage)
	const messagesPage = useSelector(state => state.messagesPage)

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<NavBar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/home/*' element={<Home />} />
						<Route path='/profile/:userId' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/users/*' element={<UsersContainer />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
						<Route path='/login/*' element={<Login />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
