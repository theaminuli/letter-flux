/**
 * Main entry point for the LetterFlux Vue application.
 * 
 * - Imports global styles and router configuration.
 * - Registers a service worker for production environments to enable offline capabilities.
 * - Mounts the Vue app to the DOM element with id 'app'.
 * 
 * @module main
 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/globals.scss'
import router from './router'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then((registration) => {
				console.log('LetterFlux: SW registered: ', registration)
			})
			.catch((registrationError) => {
				console.log('LetterFlux: SW registration failed: ', registrationError)
			})
	})
}

createApp(App).use(router).mount('#app')
