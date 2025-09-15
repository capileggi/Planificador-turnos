const CACHE_NAME = 'turnos-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js'
];

// Install event: cache the application shell
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell');
        // Add all the assets to the cache
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        // Force the waiting service worker to become the active service worker.
        return self.skipWaiting();
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Tell the active service worker to take control of the page immediately.
      return self.clients.claim();
    })
  );
});

// Fetch event: serve assets from cache or network
self.addEventListener('fetch', event => {
  // We only want to handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // For requests to the app itself (HTML, JS), use a Network First strategy
  // to ensure users always get the latest version if they're online.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If the network request is successful, clone the response
        // and store it in the cache for future offline use.
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            // Use the full request URL with query parameters as the cache key
            // This ensures that cache-busting URLs are stored correctly
            cache.put(event.request.url, responseToCache);
          });
        return response;
      })
      .catch(() => {
        // If the network request fails (e.g., user is offline),
        // try to serve the response from the cache.
        console.log('Network request failed. Trying to serve from cache for:', event.request.url);
        return caches.match(event.request).then(response => {
           if (response) {
             return response;
           }
           // If the asset is not in the cache and network is down, it will fail.
           // This is expected behavior for a network-first strategy.
        });
      })
  );
});
