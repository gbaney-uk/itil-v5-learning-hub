const CACHE_NAME = 'itil-v5-learning-phase3-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './content.js',
  './questions.js',
  './app.js',
  './manifest.json',
  './assets/mindmaps/continual-improvement.html',
  './assets/mindmaps/external-factors.html',
  './assets/mindmaps/four-dimensions-overview.html',
  './assets/mindmaps/governance.html',
  './assets/mindmaps/information-and-technology.html',
  './assets/mindmaps/itil-ai-and-other-frameworks.html',
  './assets/mindmaps/itil-guiding-principles.html',
  './assets/mindmaps/itil-value-system.html',
  './assets/mindmaps/organisations-and-people.html',
  './assets/mindmaps/partners-and-suppliers.html',
  './assets/mindmaps/product-service-lifecycle.html',
  './assets/mindmaps/products-and-service.html',
  './assets/mindmaps/service-relationships.html',
  './assets/mindmaps/service-value-and-co-creation.html',
  './assets/mindmaps/value-chain-and-practices.html',
  './assets/mindmaps/value-streams-and-mapping.html',
  './assets/mindmaps/value-streams-and-processes.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.filter(function (name) {
        return name !== CACHE_NAME;
      }).map(function (name) {
        return caches.delete(name);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        if (response && response.status === 200 && event.request.method === 'GET') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, copy);
          });
        }
        return response;
      }).catch(function () {
        return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      });
    })
  );
});
