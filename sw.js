/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "08c24ee4ea6a48f1dd16201b76c589cd"
  },
  {
    "url": "img/box1.png",
    "revision": "acae9a5a589ec78f323d58990c5e43d0"
  },
  {
    "url": "img/box2.png",
    "revision": "4037bb8da3472ebf7e369d0d7c163b90"
  },
  {
    "url": "img/box3.png",
    "revision": "8c74d7236da4cb57283e3fca052253fa"
  },
  {
    "url": "img/showcase1.jpg",
    "revision": "259dab902f8eb7e9559fd3e6d729034f"
  },
  {
    "url": "index.html",
    "revision": "4e33241f5c16374ceb583e7432f41ce9"
  },
  {
    "url": "manifest.appcache",
    "revision": "17ce47ebe8e8dff7d56ec958e5f740bb"
  },
  {
    "url": "maths/maths.html",
    "revision": "31e91fd2be48d2c02774f11f03e559a5"
  },
  {
    "url": "other/other.html",
    "revision": "f14cd92be1c3e9128e19fdd5b3983f0b"
  },
  {
    "url": "service-worker.js",
    "revision": "340c9e017809a3c260fe3ec673f7b4f9"
  },
  {
    "url": "statistics/statistics.html",
    "revision": "a6b4a637273ae4c1514f5b0910ee170c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
