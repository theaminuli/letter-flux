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
			.register('/sw.js', { scope: '/' })
			.then((registration) => {
				console.log('LetterFlux: SW registered successfully:', registration.scope)

				// Handle updates
				registration.addEventListener('updatefound', () => {
					console.log('LetterFlux: SW update found')
				})
			})
			.catch((registrationError) => {
				console.warn('LetterFlux: SW registration failed:', registrationError)
			})
	})

	// Handle service worker messages
	navigator.serviceWorker.addEventListener('message', (event) => {
		console.log('LetterFlux: Message from SW:', event.data)
	})

	// Handle controller changes
	navigator.serviceWorker.addEventListener('controllerchange', () => {
		console.log('LetterFlux: SW controller changed')
	})
}

// Create and mount the Vue app with error handling
try {
	const app = createApp(App)
	app.use(router)

	// Global error handler for Vue
	app.config.errorHandler = (error, vm, info) => {
		console.error('LetterFlux Vue Error:', error, info)
	}

	app.mount('#app')
} catch (error) {
	console.error('LetterFlux: Failed to mount app:', error)
}

// Global error handling for unhandled promises
window.addEventListener('unhandledrejection', (event) => {
	console.warn('LetterFlux: Unhandled promise rejection:', event.reason)
	// Don't prevent the default behavior to avoid breaking other error handling
})
