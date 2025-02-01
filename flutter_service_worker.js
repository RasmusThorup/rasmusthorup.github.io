'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d679c45579089e598a821d30b1c5b845",
"assets/AssetManifest.bin.json": "9df1767ff33fc0782e8a79f052425267",
"assets/AssetManifest.json": "a6ba79b415211fcfb9f34aa6317a6d77",
"assets/assets/data/data.json": "ec4960ff8181f061fba60be737d2d832",
"assets/assets/images/blackPixel.png": "6179c6eea747fe8de48473c64b1a7aef",
"assets/assets/images/dice-logotype-white.png": "2c823c43817c340b9142a5a70e745d39",
"assets/assets/images/Experiences/BF2042.jpeg": "d6371d35f2b4ce24c4987e5432f6cb47",
"assets/assets/images/Experiences/BFVPacific.jpeg": "21fa0b2683cb2d7276312af491262c72",
"assets/assets/images/Experiences/Sonic.jpeg": "56889d478930e0b312c9fa507b51cacb",
"assets/assets/images/Experiences/Unnanounced.jpeg": "1304942247ba39c66d33c5c0c9dd739f",
"assets/assets/images/mainBG0.gif": "753a113d9cf5e7f1e8a969fc44fa4e14",
"assets/assets/images/mainBG1.gif": "13ff8fa111cbde9f3e6fd0a4ede05caf",
"assets/assets/images/mainBG2.gif": "c09bd48d91f2d6741872c0f633370559",
"assets/assets/images/mainBG3.gif": "4d085ef56c5dac2f09cb845ab23387f4",
"assets/assets/images/Portfolio/portfolio_asleeplessnight.jpg": "989acf03aeddd286f85e3049b9e105a5",
"assets/assets/images/Portfolio/portfolio_bfvpacific.jpg": "ff1cc161f588ddaa13c1d9aa32f9b9b9",
"assets/assets/images/rasmus_main.png": "d6022bd205b826af6ffb5ae176f27bc4",
"assets/assets/images/Talks/talks_develop_linkpic.jpg": "3b767b8b5caa036f5564a3f8eb36301d",
"assets/assets/images/Talks/talks_develop_pic1.jpg": "3e2c8335373aa73186c2a3470583e58e",
"assets/assets/images/Talks/talks_develop_pic2.jpg": "70e220a82ef27ba694c44d289284fb89",
"assets/assets/images/Talks/talks_develop_titlepic.jpg": "7f3d236de69cd0ae656aa66aced3ca47",
"assets/assets/images/Talks/talks_sonic_linkpic.jpg": "042b51c76a9a6664b59d506190f06e16",
"assets/assets/images/Talks/talks_sonic_pic1.jpg": "1ce229a91d7d3141970fb073bbca791e",
"assets/assets/images/Talks/talks_sonic_pic2.jpg": "2ba59d7b30f2d17b5532c1b37b1e0670",
"assets/assets/images/Talks/talks_sonic_titlepic.jpg": "4347c7b97b64dd550aaee3c67fb3eccf",
"assets/assets/images/Talks/talks_thething_linkpic.jpg": "d923ae72a1d0c5552ac591db668d6da7",
"assets/assets/images/Talks/talks_thething_pic1.jpg": "1c69c2ff2ce7496208bca1a702dd908d",
"assets/assets/images/Talks/talks_thething_pic2.jpg": "e1029e085ce964365f3a88b9a45d9b6f",
"assets/assets/images/Talks/talks_thething_titlepic.jpg": "6829c6deb184613456d996bc344e745b",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "76873549cb2c1a8a402c2a75e4157823",
"assets/NOTICES": "690be20ccf3f6935ddc59799e5f5f7a9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e68b4e8d452ac81b74360784cd72c75e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af6f664762b3fca191c70d23efb8c537",
"/": "af6f664762b3fca191c70d23efb8c537",
"main.dart.js": "0754e25d9bd6514c2a6ae62c7291b198",
"manifest.json": "f901537374affde703011948192abc39",
"version.json": "7553b17678d182e955ea230910799aef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
