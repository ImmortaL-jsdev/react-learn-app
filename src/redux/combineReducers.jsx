import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import { legacy_createStore } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	users: usersReducer,
})

const store = legacy_createStore(rootReducer)

store.subscribe(() => {
	console.log('State changed:', store.getState())
})

export default store

window.store = store
