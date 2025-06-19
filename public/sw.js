// Basic service worker
const CACHE_NAME = 'wavecast-cache-v1';
const urlsToCache = [
  '/',
  '/schedule',
  '/info',
  '/manifest.json',
  // Add paths to other static assets like CSS, JS, fonts if not CDN hosted
  // '/icons/icon-192x192.png', // Example, ensure these files exist
  // '/icons/icon-512x512.png'  // Example, ensure these files exist
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Service Worker: Cache addAll failed', err))
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  // Remove old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Basic cache-first strategy for navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request)
            .then(response => {
              // Optionally cache new pages dynamically
              // const responseToCache = response.clone();
              // caches.open(CACHE_NAME).then(cache => {
              //   cache.put(event.request, responseToCache);
              // });
              return response;
            })
            .catch(() => caches.match('/')); // Fallback to home or an offline page
        })
    );
    return;
  }

  // For other requests (CSS, JS, images), use cache-first or network-first as appropriate
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
