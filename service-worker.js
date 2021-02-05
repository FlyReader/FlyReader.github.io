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
    "revision": "f54e3af9a60e963d31ce122db11b747e"
  },
  {
    "url": "assets/css/0.styles.14d8d04d.css",
    "revision": "94a966c5dec45724241450262cb068d9"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "815377be64fa137d577c02446824ac44"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "2d36edf349d1b7b38eae9dcd66a9f7d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0ba0ea7.js",
    "revision": "9290311b19ee673449cae78c17b13920"
  },
  {
    "url": "assets/js/11.504bf9b4.js",
    "revision": "909ac1099e421421ebf95509c9347161"
  },
  {
    "url": "assets/js/12.027ec924.js",
    "revision": "3b328bc1b1e2485f2b28cd4305c40975"
  },
  {
    "url": "assets/js/13.759ae9d7.js",
    "revision": "8af775c89c8a60e834cc8afc8d0a7363"
  },
  {
    "url": "assets/js/2.a548c553.js",
    "revision": "3aab1baccc4c633b4508d23308554f56"
  },
  {
    "url": "assets/js/3.6391a0d0.js",
    "revision": "3003414039bbc3157fe31d9a75d50e5d"
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
    "url": "assets/js/7.00e63a7b.js",
    "revision": "7098631038872841c7f559fac926b537"
  },
  {
    "url": "assets/js/8.2ab6fd9f.js",
    "revision": "9d76dec40dd6a5237b9724f12657cc7d"
  },
  {
    "url": "assets/js/9.025a0f11.js",
    "revision": "4f3ae793c9191cc46034087d195a17d6"
  },
  {
    "url": "assets/js/app.8e4f7f74.js",
    "revision": "ffc59eb9057eab000755b137443bf8de"
  },
  {
    "url": "en-US/index.html",
    "revision": "a694e0e6c83d2c34ce7fd7517e9938ac"
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
    "revision": "5aa78329ac02dacf27385ae850f3c84a"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "db4ed8c09cbf548bc27116af5ee5bbeb"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "03d9da50c1b53c3af859c4203403541d"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "646feab9289e7e9dc6784f1429728f08"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "0a2f6bda7fede173dc35ddd22be5a944"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "2d6a982f9327aa1c5d0af4c77636a8ad"
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
