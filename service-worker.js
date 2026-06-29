const CACHE_NAME = "itil-v5-four-dimensions-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./assets/mindmaps/Products-and-Service.png",
  "./assets/mindmaps/Organisations-and-people.png",
  "./assets/mindmaps/Information-and-Technology.png",
  "./assets/mindmaps/Partners-and-Suppliers.png",
  "./assets/mindmaps/value-streams-and-processes.png",
  "./assets/mindmaps/External-Factors.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
