import { combineReducers, legacy_createStore } from 'redux'
import profileReducer from './profileReducer' // Импортируйте ваши редюсеры
import dialogsReducer from './dialogsReducer'
import navBarReducer from './navBarReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	navBar: navBarReducer,
	users: usersReducer,
})

const store = legacy_createStore(rootReducer)

window.store = store

export default store
