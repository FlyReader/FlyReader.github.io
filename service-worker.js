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
    "revision": "547b5dfddfaa41fdf2bd20fb139319ca"
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
    "url": "assets/js/10.436b2e5a.js",
    "revision": "f741ea23cfa98f6235c028b0f4865509"
  },
  {
    "url": "assets/js/11.1c5413a5.js",
    "revision": "552555b33763af8c030804a09015ebfe"
  },
  {
    "url": "assets/js/12.feba1a05.js",
    "revision": "54806531fa05ad04de4a86b84bb9aa6f"
  },
  {
    "url": "assets/js/13.72b8b25c.js",
    "revision": "d65afeeb858947ff1157669de20ebe78"
  },
  {
    "url": "assets/js/14.afea3ae0.js",
    "revision": "eae275d6972c221c0ff6864f96344f4c"
  },
  {
    "url": "assets/js/15.1cf74b5d.js",
    "revision": "ae1dc942303e272180596e5fa30c8c35"
  },
  {
    "url": "assets/js/16.3e1538bf.js",
    "revision": "936164b71dd7fc5c5c73789cad453a31"
  },
  {
    "url": "assets/js/2.a548c553.js",
    "revision": "3aab1baccc4c633b4508d23308554f56"
  },
  {
    "url": "assets/js/3.72b62dc0.js",
    "revision": "524afbd731a12c97eb10d1fa01da89a3"
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
    "url": "assets/js/9.bfad7c19.js",
    "revision": "22d72ba809243df0212587da43b8def1"
  },
  {
    "url": "assets/js/app.91efc38a.js",
    "revision": "272fdd403ab59452c57d90ac1f016d29"
  },
  {
    "url": "en-US/index.html",
    "revision": "c78a06243f4e5889e3e705689a5057e8"
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
    "revision": "3c744ab81dac9be08538638a004bb519"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "d6b83c4631697894f5bfe8b72afc397d"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "40a08a902cb17e598cff7ab0eeda3ddf"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "f5df63c11962a864fd733054eadc88f4"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "f3adc81aae06e76275b5a05f401ab77f"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "c474bb8d651d950b33d53543dc58442b"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "43f4ae8e802cda471492bc6f0c814e74"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "851d4a93072dd927cfafc0cb3dd58143"
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
