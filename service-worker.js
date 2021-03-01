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
    "revision": "001afc1d3ae75c3121d4fd1bd7fcc25e"
  },
  {
    "url": "assets/css/0.styles.65a2bed6.css",
    "revision": "c2e11d9b4f619b77cfc7e1b06497839e"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "ee719043214d9a8e0454afa87dc67b5d"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "4871b4f5b26719d58dccd671ac672489"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0167ceb6.js",
    "revision": "8335b9ed4580466dcdee63585c5b8e6a"
  },
  {
    "url": "assets/js/11.cdfc4790.js",
    "revision": "17711f19c102d0602efeecd86a70e070"
  },
  {
    "url": "assets/js/12.706897bc.js",
    "revision": "0cbd23b4d199a84475189d3083f766c2"
  },
  {
    "url": "assets/js/13.fa88a33b.js",
    "revision": "da781b700a7bb09100eabafbb896fc59"
  },
  {
    "url": "assets/js/14.97ddd3a8.js",
    "revision": "29db73b6bf81f2c1984775edb4088684"
  },
  {
    "url": "assets/js/15.e7d1d097.js",
    "revision": "69444dfdfc6dfbace5db4d7414b5e551"
  },
  {
    "url": "assets/js/16.cd9b85af.js",
    "revision": "9b1110107f93311e233fe817b8c5ff0a"
  },
  {
    "url": "assets/js/17.359dba8f.js",
    "revision": "87d1dd0aafac2653ff9ddc06482d76db"
  },
  {
    "url": "assets/js/18.c6c85d69.js",
    "revision": "151e7ab3a49b204273ee89a2684118a9"
  },
  {
    "url": "assets/js/19.1e6bc891.js",
    "revision": "af2309fa85e1f4fdb95ae9afffaf37ac"
  },
  {
    "url": "assets/js/2.fa6eb77e.js",
    "revision": "b3bd43d590845a9f85802940085d95f0"
  },
  {
    "url": "assets/js/20.f3f7d430.js",
    "revision": "0bd965b86c755ab926660717029ff75b"
  },
  {
    "url": "assets/js/21.a9cb9f09.js",
    "revision": "4a07eb5a83f784212c00e9fea919737a"
  },
  {
    "url": "assets/js/22.6c41ade2.js",
    "revision": "b7eb45283c94527603f047d7316f12a0"
  },
  {
    "url": "assets/js/23.6f449e61.js",
    "revision": "f8f6415a4ebd796b5a947cf84f4af5c5"
  },
  {
    "url": "assets/js/24.5ca53ea1.js",
    "revision": "3577cc2bae0045a4af1526fee0951929"
  },
  {
    "url": "assets/js/3.da8a4f05.js",
    "revision": "efe3271ec3fbced098132b34428f9679"
  },
  {
    "url": "assets/js/4.0a0329fa.js",
    "revision": "bebc0fed15f8c5548b64af845d5b6442"
  },
  {
    "url": "assets/js/5.61b61119.js",
    "revision": "8a045940ff04ec4c47eefb04c6002911"
  },
  {
    "url": "assets/js/6.c12d7972.js",
    "revision": "8f030968c6aaf726699834b73d01547e"
  },
  {
    "url": "assets/js/7.ebd76072.js",
    "revision": "ccaf7692d58df85d3153780695e9ab35"
  },
  {
    "url": "assets/js/8.3e9bb6df.js",
    "revision": "a6a67b9adb979fed1285f504ba9c2eea"
  },
  {
    "url": "assets/js/9.f1a04c3b.js",
    "revision": "dcc34e5b43f158f9cdf77825e11a411f"
  },
  {
    "url": "assets/js/app.1e536105.js",
    "revision": "f1499b3088c52e47e52268eb68e1ff3a"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "c3bfdfedb133342d3889062dc4c81b0e"
  },
  {
    "url": "en-US/index.html",
    "revision": "5b0f90dd716fb27071187c786afe16a5"
  },
  {
    "url": "en-US/Thanks.html",
    "revision": "ae8649e4fa7ac9372a3ef3124ea62efb"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c6da624cb58c77d961157cae0a96d8aa"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "f15ffca4f7a99274fcea0fb90e719299"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "7b1293029737da8e90c3960b4aa709d6"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "295d33a9ffcb1c1b4e7674b1d9858543"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "dde2752d9c2347cfa71660c568393ce8"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "a3ad161314e33fd64a9f45088c609a0b"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "c5cb07bc403f726fc9e6974bd185ff7a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dde2752d9c2347cfa71660c568393ce8"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d9c94a174f41628ca4ee9117b5202688"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "8de002ed92f85ceb0d786741e06134a7"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "c6aec714ca087b3b4796f3c6028476ee"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "5c28b7eda768ed9922bd28bdf6c59c0c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a920bca5227d389db9cc217f026c87cd"
  },
  {
    "url": "index.html",
    "revision": "5aa78329ac02dacf27385ae850f3c84a"
  },
  {
    "url": "zh-hans/docs/Changelog.html",
    "revision": "3c62e04f8718ef7c2d23c644ffd52456"
  },
  {
    "url": "zh-hans/docs/Error-Codes.html",
    "revision": "26b70c243882f899d2f5c76ea7aa3b33"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "1da510e76ac6a296268435d68c1040f5"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "3bfdec6649490ecaf9af8758ec02c856"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "dff6c5e2f49403cd49c25fb64546ac78"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "7c00b6ae377f6590e555616e7d04c59d"
  },
  {
    "url": "zh-hans/docs/Report-Issues-to-Us.html",
    "revision": "44a7ea594f50a96b151862bb31d12d1c"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "648159c29dbd68e6bd3f18a215c00b33"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "2976d99b4e2a43dcaf18cda28724acbc"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "7758422132fb2fe568b469f85ae21b3e"
  },
  {
    "url": "zh-hans/privacystatement.html",
    "revision": "bf61c5571855f04bed3e2856e33b4d02"
  },
  {
    "url": "zh-hans/servicesagreement.html",
    "revision": "efac05c639821c704f2534ac270a50ec"
  },
  {
    "url": "zh-hans/Thanks.html",
    "revision": "5783af5e48c4099e49252eaafce238c0"
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
