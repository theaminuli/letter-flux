// LetterFlux Service Worker
// Simple caching strategy for performance improvement

const CACHE_NAME = 'letterflux-v1'
const STATIC_CACHE_URLS = [
	'/',
	'/src/main.js',
	'/src/App.vue',
	'/about',
	'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap',
	'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('LetterFlux: Caching static assets')
				return cache.addAll(STATIC_CACHE_URLS)
			})
			.catch((error) => {
				console.log('LetterFlux: Cache failed:', error)
			})
	)
	self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => caches.delete(cacheName))
			)
		})
	)
	self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
	// Skip non-GET requests
	if (event.request.method !== 'GET') return

	// Skip extension requests and non-http(s) protocols
	const url = event.request.url
	if (
		url.startsWith('chrome-extension://') ||
		url.startsWith('moz-extension://') ||
		url.startsWith('safari-extension://') ||
		url.startsWith('ms-browser-extension://') ||
		url.startsWith('blob:') ||
		url.startsWith('data:') ||
		!url.startsWith('http')
	) {
		return
	}

	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				// Return cached version or fetch from network
				return (
					response ||
					fetch(event.request)
						.then((fetchResponse) => {
							// Only cache successful responses from same origin or CDN
							if (
								fetchResponse.status === 200 &&
								(event.request.url.startsWith(self.location.origin) ||
									event.request.url.includes('googleapis.com'))
							) {
								const responseClone = fetchResponse.clone()
								caches
									.open(CACHE_NAME)
									.then((cache) => {
										cache.put(event.request, responseClone)
									})
									.catch(() => {
										// Silently fail cache put operations
									})
							}
							return fetchResponse
						})
						.catch((error) => {
							// Handle network errors more gracefully
							console.log('LetterFlux: Fetch failed:', error)
							throw error
						})
				)
			})
			.catch(() => {
				// Fallback for offline - only for navigation requests
				if (event.request.mode === 'navigate') {
					return new Response(
						'LetterFlux is offline. Please check your internet connection.',
						{
							status: 503,
							statusText: 'Service Unavailable',
							headers: { 'Content-Type': 'text/plain' }
						}
					)
				}
				// For other requests, let them fail naturally
				throw new Error('Resource not available offline')
			})
	)
})
