import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000, // Указываем порт, на котором будет работать сервер
		proxy: {
			'/api': {
				target: 'https://social-network.samuraijs.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
})
