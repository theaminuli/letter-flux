import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/globals.scss'
import router from './router'

// Register service worker for performance
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
