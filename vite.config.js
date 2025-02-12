import { defineConfig } from 'vite'

export default {
	server: {
		proxy: {
			'/api': {
				target: 'https://social-network.samuraijs.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
}
