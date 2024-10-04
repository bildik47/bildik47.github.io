const urlsToCache = [
    '/',
    '/stok.html',
    '/barkod.html',
    '/index.html',
    'icon-192x192.png',
    'icon-512x512.png',
];

// Service Worker dosyanız

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Yeni service worker'ın hemen aktif olmasını sağlıyoruz
});

self.addEventListener('activate', (event) => {
    self.clients.claim(); // Yeni service worker'ı hemen kullanmaya başlamak için
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request) // Tüm istekleri doğrudan network'ten yanıtla
    );
});

