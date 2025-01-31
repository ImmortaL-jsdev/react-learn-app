import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './redux/state.jsx'
import App from './App.jsx'

// Создаем корень сразу после импорта необходимых модулей
const container = document.getElementById('root')
const root = createRoot(container)

// Функция для рендеринга приложения
let rerenderEntireTree = state => {
	root.render(
		<StrictMode>
			<App state={state} dispatch={store.dispatch.bind(store)} store={store} />
		</StrictMode>,
	)
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
