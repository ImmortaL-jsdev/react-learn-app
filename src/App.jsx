import React from 'react'
import Header from '../components/Header/Header.jsx'
import NavBar from '../components/Navbar/Nav.jsx'
import './App.css'
import Profile from '../components/Profile/Profile.jsx'
import Dialogs from '../components/Dialogs/Dialogs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Music from '../components/Musics/Music.jsx'
import Settings from '../components/Settings/Settings.jsx'
import Friends from '../components/Friends/Friends.jsx'
import { useSelector } from 'react-redux'

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
								messagesPage ? ( // Здесь используется messagesPage
									<Dialogs
										dialogsData={messagesPage.dialogsData}
										messageData={messagesPage.messageData}
										messagesPage={messagesPage}
									/>
								) : (
									<div>Loading messages...</div>
								)
							}
						/>
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
						<Route path='/friends/*' element={<Friends />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
