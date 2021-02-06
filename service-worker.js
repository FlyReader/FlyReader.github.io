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
    "revision": "9874377b296f92f2f9296bb479e858a5"
  },
  {
    "url": "assets/css/0.styles.9e0b97c1.css",
    "revision": "091599f040497f716383ed14f557aba7"
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
    "url": "assets/js/10.f2f98200.js",
    "revision": "dfc75fd460259257a886f14383cf46be"
  },
  {
    "url": "assets/js/11.9645d832.js",
    "revision": "f83a035177d2a879f122b348b00bf149"
  },
  {
    "url": "assets/js/12.620ded64.js",
    "revision": "a955deafae7833d8f6210b8ee963d9ce"
  },
  {
    "url": "assets/js/13.b5412872.js",
    "revision": "cb7f5bde60059a69afebd5398356adfd"
  },
  {
    "url": "assets/js/14.df18ef62.js",
    "revision": "df683349d83f4dca3fa951dfc7dd7abc"
  },
  {
    "url": "assets/js/15.15172d2c.js",
    "revision": "c9a2a3feefff3873959cee877d07b5c2"
  },
  {
    "url": "assets/js/16.b24204f8.js",
    "revision": "29f9f11ca9e434e8f0483e519f77bb99"
  },
  {
    "url": "assets/js/2.754939ad.js",
    "revision": "73ba9fe0a8445328b287e758995367ee"
  },
  {
    "url": "assets/js/3.e0089c9f.js",
    "revision": "595047ec3210c8a5aac38c055e24c1da"
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
    "url": "assets/js/app.8cd1c70b.js",
    "revision": "969539e1f4000a7dade5519e20cf32d1"
  },
  {
    "url": "en-US/index.html",
    "revision": "a66d3155fac63b03679ff34f35eb315d"
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
    "revision": "b8ca4626c559f973a6621e1bf77ec10c"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "f8f03c26c141d1f152ef12c5278e25a3"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "4c2554f6c6db971cbb11b911b591aeae"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "9b7d37a235b9d960bce4f9f9eb42bceb"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "9ba5f85238ed2faaee996aae51dddda9"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "bfbaffedf5f3f76672bb0ff9336a4c7b"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "2f7a2d3879f4042de00100aaf3e486f8"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "4e539a6dd558232f31864ba088c6c344"
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
