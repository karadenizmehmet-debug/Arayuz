// Yükleme koşulu için boş servis çalışanı: önbellek tutmaz, her şey ağdan gelir.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
