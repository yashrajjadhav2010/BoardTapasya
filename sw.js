// This makes the app installable!
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Allows the app to work normally when online
    e.respondWith(fetch(e.request).catch(() => {
        console.log("App is currently offline");
    }));
});