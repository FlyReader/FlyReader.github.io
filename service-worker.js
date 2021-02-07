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
    "revision": "824f7ea75cac3b6134a31be7aff1b644"
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
    "url": "assets/js/18.4b24fb56.js",
    "revision": "0c4698bdbdd2eb47c5dc96db831b8377"
  },
  {
    "url": "assets/js/19.6be3d8dc.js",
    "revision": "959741e767276f4165876daaa6708a64"
  },
  {
    "url": "assets/js/2.754939ad.js",
    "revision": "73ba9fe0a8445328b287e758995367ee"
  },
  {
    "url": "assets/js/20.9121d253.js",
    "revision": "ec7696cce8198b74aa4c1491e3140fe0"
  },
  {
    "url": "assets/js/3.a5d8eb0d.js",
    "revision": "1956c4615476d993fc1fde0b5024a8d8"
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
    "url": "assets/js/7.ea3e5950.js",
    "revision": "5439aaee5ac88243f4e6cacec5ee5186"
  },
  {
    "url": "assets/js/8.85043805.js",
    "revision": "1dda1e9242d59d646fc45f12ed4f1786"
  },
  {
    "url": "assets/js/9.b9470a16.js",
    "revision": "1b409f576589faa894bc5cdcd8809407"
  },
  {
    "url": "assets/js/app.e1185d83.js",
    "revision": "76eb7d1ad2b8683725a10589f7545432"
  },
  {
    "url": "en-US/index.html",
    "revision": "ca6d780d5af423ae6bf691a6ab92f853"
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
    "revision": "32f8c8fdcadd5f2291f391c954dc19d5"
  },
  {
    "url": "zh-hans/docs/Error-Codes.html",
    "revision": "f7666e1fd892db263449d512f9e83206"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "c9e8c61e4561b002930da4161df5efb5"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "ba2adca53e973343f3da1d492a0d4690"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "7f70f797187e5fb35b0933e8816d1925"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "5a0a0911f38c91816fd2ca6e07d0ef13"
  },
  {
    "url": "zh-hans/docs/Report-Issues-to-Us.html",
    "revision": "8902e735931a0aad912c633b1cb9ae7e"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "51a1a1a2f309b9cdc757fb296df759d7"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "878639cef3a23d6f2b490e8f7e10bf22"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "e6af8e17b4f8a597f57d08f5560fa507"
  },
  {
    "url": "zh-hans/privacystatement.html",
    "revision": "2c532cc02274090198288d46c0b0701c"
  },
  {
    "url": "zh-hans/servicesagreement.html",
    "revision": "966dcc797f6054ab99742445db768251"
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
