import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux' // Импортируем Provider
import './index.css'
import store from './redux/redux-store.jsx'
import App from './App.jsx'
import React from 'react'

// Создаем корень сразу после импорта необходимых модулей
const container = document.getElementById('root')
const root = createRoot(container)

// Функция для рендеринга приложения
const renderEntireTree = () => {
	root.render(
		<StrictMode>
			<Provider store={store}>
				{' '}
				{/* Оборачиваем App в Provider */}
				<App />
			</Provider>
		</StrictMode>,
	)
}

renderEntireTree() // Вызываем функцию рендеринга
store.subscribe(renderEntireTree)
