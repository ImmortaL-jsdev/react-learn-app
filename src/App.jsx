import React from 'react'
import Header from '../components/Header/Header.jsx'
import NavBar from '../components/Navbar/Nav.jsx'
import './App.css'
import Profile from '../components/Profile/Profile.jsx'
import Dialogs from '../components/Dialogs/Dialogs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Music from '../components/Musics/Music.jsx'
import Settings from '../components/Settings/Settings.jsx'

import { Provider, useSelector } from 'react-redux'
import DialogsContainer from '../components/Dialogs/DialogsContainer.jsx'
import Users from '../components/Users/Users.jsx'
import Home from '../components/Home/Home.jsx'
import UsersContainer from '../components/Users/UsersContainer.jsx'

const App = () => {
	const profilePage = useSelector(state => state.profilePage)
	const messagesPage = useSelector(state => state.messagesPage)

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<NavBar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path='/home/*'
							element={
								profilePage ? (
									<Home
										postData={profilePage.postData}
										profilePage={profilePage}
									/>
								) : (
									<div>Loading home...</div>
								)
							}
						/>
						<Route />
						<Route
							path='/profile/*'
							element={
								profilePage ? (
									<Profile
										postData={profilePage.postData}
										profilePage={profilePage}
									/>
								) : (
									<div>Loading profile...</div>
								)
							}
						/>
						<Route
							path='/dialogs/*'
							element={
								messagesPage ? (
									<DialogsContainer
										dialogsData={messagesPage.dialogsData}
										messageData={messagesPage.messageData}
										messagesPage={messagesPage}
									/>
								) : (
									<div>Loading messages...</div>
								)
							}
						/>
						<Route path='/users/*' element={<UsersContainer />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
						<Route path='/users/*' element={<Users />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
