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

    // Skip chrome-extension requests
    if (event.request.url.startsWith('chrome-extension://')) return

    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return (
                    response ||
                    fetch(event.request).then((fetchResponse) => {
                        // Cache successful responses
                        if (fetchResponse.status === 200) {
                            const responseClone = fetchResponse.clone()
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(event.request, responseClone)
                            })
                        }
                        return fetchResponse
                    })
                )
            })
            .catch(() => {
                // Fallback for offline - could return a custom offline page
                return new Response(
                    'LetterFlux is offline. Please check your internet connection.',
                    {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: { 'Content-Type': 'text/plain' }
                    }
                )
            })
    )
})
