import Header from '../components/Header/Header.jsx'
import NavBar from '../components/Navbar/Nav.jsx'
import './App.css'
import Profile from '../components/Profile/Profile.jsx'
import Dialogs from '../components/Dialogs/Dialogs.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Music from '../components/Musics/Music.jsx'
import Settings from '../components/Settings/Settings.jsx'
import Friends from '../components/Friends/friends.jsx'

const App = props => {
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
								<Profile
									postData={props.state.profilePage.postData}
									profilePage={props.state.profilePage}
									addPost={props.addPost}
									updateNewPostText={props.updateNewPostText}
								/>
							}
						/>
						<Route
							path='/dialogs/*'
							element={
								<Dialogs
									dialogsData={props.state.messagesPage.dialogsData}
									messageData={props.state.messagesPage.messageData}
								/>
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
