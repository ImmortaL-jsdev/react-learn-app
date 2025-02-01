import { combineReducers, legacy_createStore } from 'redux'
import profileReducer from './profileReducer' // Импортируйте ваши редюсеры
import dialogsReducer from './dialogsReducer'
import navBarReducer from './navBarReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	navBar: navBarReducer,
	// добавьте другие редюсеры здесь
})

const store = legacy_createStore(rootReducer)

export default store
