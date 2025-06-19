// A basic service worker for caching static assets

const CACHE_NAME = 'wavecast-cache-v1';
const urlsToCache = [
  '/',
  '/schedule',
  '/info',
  '/manifest.json',
  // Add other important static assets here, like CSS, JS, and key images.
  // For example:
  // '/styles/globals.css',
  // '/app.js',
  // '/icons/icon-192x192.png', // Ensure these paths match your actual icon paths
  // '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // It's important to only cache assets that are definitely available at build time.
        // Dynamic content or assets that might change frequently are better handled with other strategies.
        return cache.addAll(urlsToCache.filter(url => !url.startsWith('https://placehold.co'))); // Don't cache placeholders
      })
      .catch(error => {
        console.error('Failed to cache during install:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
