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
    "revision": "fdad5ea9bdf51495b2c0fb60bb2d77c5"
  },
  {
    "url": "assets/css/0.styles.9d2d3a76.css",
    "revision": "fe2dfd82fd80a9943d83903a75063031"
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
    "url": "assets/js/10.de4ede8b.js",
    "revision": "8b653bda01a0e8a5308b256c680f1b41"
  },
  {
    "url": "assets/js/11.fe446187.js",
    "revision": "2b87c74308d06f35f4d5e08a9fa7c6b3"
  },
  {
    "url": "assets/js/12.bc54bd8d.js",
    "revision": "39f53dcf93833f8cd7b0ff711eb5bf71"
  },
  {
    "url": "assets/js/13.00d4192f.js",
    "revision": "875f53f6139b3e7b24d0a43c9e31479d"
  },
  {
    "url": "assets/js/14.f46529c5.js",
    "revision": "f416cd4e418986238c21dbbe3ee45567"
  },
  {
    "url": "assets/js/15.9b3638db.js",
    "revision": "7aca20a057bb753336d80a8abd26b526"
  },
  {
    "url": "assets/js/16.bb688218.js",
    "revision": "30eee966d3db432a0f55cc1b07b1e441"
  },
  {
    "url": "assets/js/17.4d4a1e0c.js",
    "revision": "cc5c902b900247ced13a149ab35a9c5c"
  },
  {
    "url": "assets/js/18.bd0aa01f.js",
    "revision": "85abe72d3f7b0bfc3904a5f1f260055e"
  },
  {
    "url": "assets/js/2.754939ad.js",
    "revision": "73ba9fe0a8445328b287e758995367ee"
  },
  {
    "url": "assets/js/3.c033293e.js",
    "revision": "c2e7282fdbe90fa9d04c399e1b50e540"
  },
  {
    "url": "assets/js/4.87e5926e.js",
    "revision": "19acde5bb058e5b5fc6d4559482f3e1a"
  },
  {
    "url": "assets/js/5.07d57a63.js",
    "revision": "0a24f8aa16965e88e8086cbf3c2d53bf"
  },
  {
    "url": "assets/js/6.961d625e.js",
    "revision": "91f5235e8e07409d682a8107966689c0"
  },
  {
    "url": "assets/js/7.a9afe1e9.js",
    "revision": "b78328b5c215285c9644c62d384a6d79"
  },
  {
    "url": "assets/js/8.db4bb196.js",
    "revision": "2dd322ceb255bd85726b44d667ea6dd4"
  },
  {
    "url": "assets/js/9.e5245ede.js",
    "revision": "e113e4a68a635e9dab44f510240bc554"
  },
  {
    "url": "assets/js/app.544447a4.js",
    "revision": "20d4e245ce35be0b0183175254737875"
  },
  {
    "url": "en-US/index.html",
    "revision": "4da20fa363b09a20c83f65f11cba4d59"
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
    "url": "zh-hans/docs/Changelog.html",
    "revision": "f1db69aff4b1d2ab2d7d294269f20728"
  },
  {
    "url": "zh-hans/docs/Error-Codes.html",
    "revision": "47b4f4cf90de528b9ae2cc25615794fb"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "9705e4cc76173dcc8415857a1d18614f"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "dc4f327c05ee6294552c930f6e131c1b"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "720112b7bc624062de2d32d890df7440"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "7f7fb7554997430e3708e6172ba60061"
  },
  {
    "url": "zh-hans/docs/Report-Issues-to-Us.html",
    "revision": "8fa79fb1113a616a8c7d1692ebf7dcf6"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "f267d07625563fba718570b12114bb42"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "da1b9cfd728a94dbb92fda01683b2dd6"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "1157df02363052f7dd19bc63be63030f"
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
