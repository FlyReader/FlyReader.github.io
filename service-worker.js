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
    "revision": "8dc0459b9ee32855af6f3e5ad9d1286e"
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
    "url": "assets/js/10.1496e63f.js",
    "revision": "110953f2e54dfbe9a9f24ddbfad4fdf6"
  },
  {
    "url": "assets/js/11.6f4c6cf4.js",
    "revision": "e21619e2f0c92feb82f7d452f20a3828"
  },
  {
    "url": "assets/js/12.9da43a64.js",
    "revision": "e46eee8b93772e9b391bf6bf5b614369"
  },
  {
    "url": "assets/js/13.60746426.js",
    "revision": "22a89cb3988330c7720aa537c9adfac7"
  },
  {
    "url": "assets/js/14.c0d4f5a0.js",
    "revision": "9d8f7c052c2177d4095226405475bef3"
  },
  {
    "url": "assets/js/15.d0955955.js",
    "revision": "770f52c13fcc3aa827e0c796e8d1c795"
  },
  {
    "url": "assets/js/16.c4962c39.js",
    "revision": "4775201143eb0bfa9d9f9807b7bc9d98"
  },
  {
    "url": "assets/js/17.fc9318b5.js",
    "revision": "a004baf388dc52620655749068cf1092"
  },
  {
    "url": "assets/js/18.60734cee.js",
    "revision": "7c4e57c57dd3d159882834ab09dcc9d7"
  },
  {
    "url": "assets/js/19.edcd1735.js",
    "revision": "e731e18859bdb58a7814689958f54889"
  },
  {
    "url": "assets/js/2.d687b5d1.js",
    "revision": "73ba9fe0a8445328b287e758995367ee"
  },
  {
    "url": "assets/js/20.35418a9a.js",
    "revision": "d5e99af4f2283cc1c27433b3bc14a8af"
  },
  {
    "url": "assets/js/21.d453f04a.js",
    "revision": "f49237d48be250a857183fed0619211f"
  },
  {
    "url": "assets/js/22.f5e370c0.js",
    "revision": "7ee20e841d8988c6f39b8c9b6a6e4176"
  },
  {
    "url": "assets/js/23.9e4eeb60.js",
    "revision": "b1e788920c0519c07f4a20a6d6591b2c"
  },
  {
    "url": "assets/js/3.19857ae5.js",
    "revision": "dc951b5a2a04005ddf26c165438e9609"
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
    "url": "assets/js/8.2b016279.js",
    "revision": "46bcf8e117def600d1ed3971de81505d"
  },
  {
    "url": "assets/js/9.937ec4b0.js",
    "revision": "49d9bd5bea3541ce1b60bbdd9e146687"
  },
  {
    "url": "assets/js/app.685666ea.js",
    "revision": "d9788e0aeb9952f1c844559686c1bfaa"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "54b56b90ca70e8a65eec5c87b07a6415"
  },
  {
    "url": "en-US/index.html",
    "revision": "8f6a52597effcece69a62fdf3448246f"
  },
  {
    "url": "en-US/Thanks.html",
    "revision": "e2006880664071a794fd3e86b541b17f"
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
    "revision": "f19432b83eb6ac82ef0beb68268ed73e"
  },
  {
    "url": "zh-hans/docs/Error-Codes.html",
    "revision": "ed76442fe01478da69a5fd7024e9805e"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "0aa3a7e00278afef260c19590622b751"
  },
  {
    "url": "zh-hans/docs/Launch-FlyReader-with-URL.html",
    "revision": "d6026da36ff260d1016759d774661f5e"
  },
  {
    "url": "zh-hans/docs/Payment-Issues.html",
    "revision": "b9850b3ed5613bbdcff8372b714ebd87"
  },
  {
    "url": "zh-hans/docs/Refresh-Local-Book-Chapters-with-Regular-Expressions.html",
    "revision": "cddc51dee45ccfcac8748c4f668ed707"
  },
  {
    "url": "zh-hans/docs/Report-Issues-to-Us.html",
    "revision": "13a89ed851869165d531ac8c1002ddbc"
  },
  {
    "url": "zh-hans/docs/Using-Common-Rules-to-Block-Unwanted-Content.html",
    "revision": "d18db7c8cec38d64d08435d00a4c0758"
  },
  {
    "url": "zh-hans/docs/Using-Cortana-Lunch-FlyReader.html",
    "revision": "094cd0af6ab3c6eda98b02bd26b3d7b9"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "44ed22aeb734147aa8ad92be1e186144"
  },
  {
    "url": "zh-hans/privacystatement.html",
    "revision": "565ad416c94c0e3f21799edcccbca5f2"
  },
  {
    "url": "zh-hans/servicesagreement.html",
    "revision": "504d869113e6309ca973ef4f9f50be05"
  },
  {
    "url": "zh-hans/Thanks.html",
    "revision": "e45a61ad01937b70c906b3aaf02910f1"
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
