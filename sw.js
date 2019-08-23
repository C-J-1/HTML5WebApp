console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       "css/style.css",
       "img/box1.png",
       "img/box2.png",
       "img/box3.png",
       "img/showcase1.jpg",
       "index.html",
       "manifest.json",
       "maths/maths.html",
       "other/other.html",
       "install.js",
       "statistics/statistics.html",
     ]);
   })
 );
});


self.addEventListener('activate', function(event) {
	// Delete old asset caches.
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(
				keys.map(function(key) {
					if (
						key != OFFLINE_CACHE &&
						key.startsWith(`${PREFIX}-`)
					) {
						return caches.delete(key);
					}
				})
			);
		})
	);
});


self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
