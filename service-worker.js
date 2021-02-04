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
    "url": "404.html",
    "revision": "b254fff96e467534042b5e411ff5e5ce"
  },
  {
    "url": "assets/css/0.styles.52cbed82.css",
    "revision": "9daa4f5f729451a0aed2b3282a3e4027"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a548c553.js",
    "revision": "3aab1baccc4c633b4508d23308554f56"
  },
  {
    "url": "assets/js/3.bb659546.js",
    "revision": "5249edabe2f824976908c93bf79b6180"
  },
  {
    "url": "assets/js/4.9ef5a331.js",
    "revision": "905c7c10ff8de42d84a0f71694922e0a"
  },
  {
    "url": "assets/js/5.e46a70df.js",
    "revision": "b771318922df51613651a022977e1297"
  },
  {
    "url": "assets/js/6.3d7fe4d3.js",
    "revision": "0b98402798ee41c93b3c974ee76c8d57"
  },
  {
    "url": "assets/js/7.15eb1160.js",
    "revision": "7098631038872841c7f559fac926b537"
  },
  {
    "url": "assets/js/8.a66915cc.js",
    "revision": "c46029dbf5d93e898e2335874f273db8"
  },
  {
    "url": "assets/js/app.79bfba0a.js",
    "revision": "c6131073b36139dc2754e8bde31ddc84"
  },
  {
    "url": "hero.png",
    "revision": "815377be64fa137d577c02446824ac44"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "015952ab2d4c40dd487e2f272b753ea8"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2d36edf349d1b7b38eae9dcd66a9f7d6"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "edaf952dc1897469ec5233ae7d0bb16f"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "09f10ebf001b3325b4d2d7b61726c02c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b4f0fae337e3341ea3fb1f0636ac791c"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b65b07298be7094f2e7b4137d9fe4254"
  },
  {
    "url": "index.html",
    "revision": "ecde87e7a234bc8914d855e39cbea116"
  },
  {
    "url": "logo.png",
    "revision": "2d36edf349d1b7b38eae9dcd66a9f7d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
