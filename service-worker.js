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
    "revision": "a819866644a3c96bc9188994448fa24f"
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
    "url": "assets/js/11.e62adb38.js",
    "revision": "43f685a07cc62489384fbb73cd309a1e"
  },
  {
    "url": "assets/js/12.989f1ed0.js",
    "revision": "33988c5e23c9f70772fa5ed9973717a1"
  },
  {
    "url": "assets/js/13.e1c3dbec.js",
    "revision": "fc954b9e0c4b336c9471762bd83b7e46"
  },
  {
    "url": "assets/js/14.069537d0.js",
    "revision": "610ade1292dcc4ebae80614c028be117"
  },
  {
    "url": "assets/js/15.34932dc6.js",
    "revision": "fce06971a6f54307f5954e65224ea3ff"
  },
  {
    "url": "assets/js/2.a548c553.js",
    "revision": "3aab1baccc4c633b4508d23308554f56"
  },
  {
    "url": "assets/js/3.dd22a757.js",
    "revision": "b8a9220247eaba71fd90c0c3600030df"
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
    "url": "assets/js/9.4d9f6b26.js",
    "revision": "167f4b8e80e413047402a94626821c18"
  },
  {
    "url": "assets/js/app.6b8a27e7.js",
    "revision": "99dc1acf069156a1e35e60f9388f1225"
  },
  {
    "url": "en-US/index.html",
    "revision": "96f2457e9be1881ad5345c7d8820c0d3"
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
    "revision": "36e1137f2e3850e78e8e200b69cd1c43"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "0d77992ba372ae3d36b0b2c251f11f9e"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "3f0196204ed6250dcc0d1da8c714711f"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "055eefa8e738e3f45aec093e7dc87e2f"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "2b467c072fb6138dc4bced80d4d2a08f"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "9b76769515fe3cc986165aa320731673"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "15c033cb7a75890d76759e5cbfb576cb"
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
