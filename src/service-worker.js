importScripts('./cache-polyfill.js');

const filesToCache = [
  '/breathing-with-kitty/',
  '/breathing-with-kitty/index.html'
];

const filesToCacheLocal = [
  '/',
  '/index.html'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
    .catch(function(error) {
      caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll(filesToCacheLocal)
      })
      .catch(function(error) {
        console.log('Installation failed, ', error);
      })
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('ServiceWorker activating...');

  const cacheWhiteList = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      } else { return fetch(event.request); }
    })
    .then(function(response) {
      return caches.open(staticCacheName).then(function(cache) {
        cache.put(event.request.url, response.clone());
        return response;
      });
    })
    .catch(function(error) {
      console.log('Resource could not be found: ', error);
      //respond with custom offline page here...
    })
  );
});
