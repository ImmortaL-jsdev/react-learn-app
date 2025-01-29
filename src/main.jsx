import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import state from './redux/state.jsx'
import App from './App.jsx'
import { addPost, updateNewPostText } from './redux/state.jsx'
import { subscribe } from './redux/state.jsx'

// Создаем корень сразу после импорта необходимых модулей
const container = document.getElementById('root')
const root = createRoot(container)

// Функция для рендеринга приложения
let rerenderEntireTree = state => {
	root.render(
		<StrictMode>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
			/>
		</StrictMode>,
	)
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
