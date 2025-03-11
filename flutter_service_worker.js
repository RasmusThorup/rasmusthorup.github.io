'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "305c68335a849f245d4c871e6d07851f",
"assets/AssetManifest.bin.json": "708af8eaa5ee113776bf889c80b776ee",
"assets/AssetManifest.json": "347e6090779baf4325b78d715b619c61",
"assets/assets/data/data.json": "ec4960ff8181f061fba60be737d2d832",
"assets/assets/images/about_me_picture.jpg": "269eaea585911bed15375e4b695f7459",
"assets/assets/images/blackPixel.png": "6179c6eea747fe8de48473c64b1a7aef",
"assets/assets/images/dice-logotype-white.png": "2c823c43817c340b9142a5a70e745d39",
"assets/assets/images/Experiences/BF2042.jpeg": "7be5a8e41a23a2f8dc613be5eb7752aa",
"assets/assets/images/Experiences/BFVPacific.jpeg": "bc570b3c44443816caeb56ca71b86a6d",
"assets/assets/images/Experiences/Sonic.jpeg": "6189cfc2c54c04f564f638ae6b9b3f4b",
"assets/assets/images/Experiences/Unnanounced.jpeg": "3e82acf84d3c58de524df8448a5d52c2",
"assets/assets/images/Extra_cats.png": "a1c808599ae5162e0f76b8ddf54117cd",
"assets/assets/images/mainBG0.gif": "753a113d9cf5e7f1e8a969fc44fa4e14",
"assets/assets/images/mainBG1.gif": "13ff8fa111cbde9f3e6fd0a4ede05caf",
"assets/assets/images/mainBG2.gif": "c09bd48d91f2d6741872c0f633370559",
"assets/assets/images/mainBG3.gif": "4d085ef56c5dac2f09cb845ab23387f4",
"assets/assets/images/Portfolio/portfolio_asleeplessnight.jpg": "4051c27462a340bfd86bb319fc180c16",
"assets/assets/images/Portfolio/portfolio_bfvpacific.jpg": "d2f81a802103674d61e5211605662879",
"assets/assets/images/Talks/talks_develop_linkpic.jpg": "5c936fd1bad06ad8006480f6ee4eb7ed",
"assets/assets/images/Talks/talks_develop_pic1.jpg": "747b35289dbb888e8067b1c9db45465e",
"assets/assets/images/Talks/talks_develop_pic2.jpg": "aa1c9e2806da701fa38f971aaff9f46b",
"assets/assets/images/Talks/talks_develop_titlepic.jpg": "e09727af4ac36941c57b18fbf27e28ca",
"assets/assets/images/Talks/talks_sonic_linkpic.jpg": "82ac30bfaacb4ecc80c996f327871321",
"assets/assets/images/Talks/talks_sonic_pic1.jpg": "7ff7256477b53fd492d0a6831dbb706d",
"assets/assets/images/Talks/talks_sonic_pic2.jpg": "8721e1671f87d489f1ca8866a444a654",
"assets/assets/images/Talks/talks_sonic_titlepic.jpg": "e5223a8283d22a73caa7f0fd61ea2581",
"assets/assets/images/Talks/talks_thething_linkpic.jpg": "61a2093d4e92bd83c986f2fc4884577d",
"assets/assets/images/Talks/talks_thething_pic1.jpg": "a0780e1788b52a432a8f9a9f4f5ae309",
"assets/assets/images/Talks/talks_thething_pic2.jpg": "69d71e47ebecf221b13f72fe4e0c57f5",
"assets/assets/images/Talks/talks_thething_titlepic.jpg": "da6844780a9b3ddaf0c03b70239cade0",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "2bac7a7a2c6e0eac257ced413b6094ed",
"assets/NOTICES": "37597315466f41d1b9d4a2a450ad1fcc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9964503d1a28b3d8dc6275a53e19d146",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af6f664762b3fca191c70d23efb8c537",
"/": "af6f664762b3fca191c70d23efb8c537",
"main.dart.js": "787aace9efa231a6906cdf44a237d14a",
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
