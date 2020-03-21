'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "c41d6ed550ddd4766b20417649bfaec4",
"/main.dart.js": "aefcbe4aa7d3d299b6ce4377b515fb82",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "75e7672b5909aee192471f3bc8d2db14",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/tileimg.png": "9860588b7f4ffcfcf6107302ddfc964d",
"/assets/assets/calender.png": "a0f0e3c5c5dcb8853538bd39e3402e54",
"/assets/assets/profilepic.jpg": "c5f48002521b3e42b251ef56e21e0b9a",
"/assets/assets/concert.png": "60c6a1fec04c166b9fd3c607277c75a4",
"/assets/assets/music_event.png": "f9a590c3a439c28b9840743a177336ab",
"/assets/assets/sports.png": "e862871bad566f37a35a201fff23b5db",
"/assets/assets/background.png": "120015ef6c1058433e23be4e3f9e51a0",
"/assets/assets/menu.png": "2235a5e169f22b83b879af70800ae6d6",
"/assets/assets/logo.png": "981940b729373e681c3046c6d158b247",
"/assets/assets/notify.png": "4956d3e9d3616f48b69930a1bb9b5c2d",
"/assets/assets/second.png": "83ef29102beefeeed7fdc302dd7fb342",
"/assets/assets/location.png": "2039d9d799a48d3954ae130d8225d4ed",
"/assets/assets/education.png": "293efffbccaab310435aeca4f9555307"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
