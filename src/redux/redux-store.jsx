import { combineReducers, legacy_createStore } from 'redux'
import profileReducer from './profileReducer' // Импортируйте ваши редюсеры
import dialogsReducer from './dialogsReducer'
import navBarReducer from './navBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	navBar: navBarReducer,
	users: usersReducer,
	auth: authReducer,
})

const store = legacy_createStore(rootReducer)

window.store = store

export default store
