import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import { legacy_createStore } from 'redux'
import usersReducer from './usersReducer'

// Объединяем редьюсеры
const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	users: usersReducer,
})

// Создаем Redux store
const store = legacy_createStore(rootReducer)

// Подписка на изменения состояния
store.subscribe(() => {
	console.log('State changed:', store.getState())
})

// Экспортируем store
export default store

// Для отладки в браузере
window.store = store
