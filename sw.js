importScripts('/cache-polyfill.js');

// const filesToCache = [
//   ''
// ]
self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open('pages-cache-v1')
    .then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
    .catch(function(error) {
      console.log('Installation failed, ', error);
    })
  );
});
