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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1ad6dd0a40cb503a78ae.js"
  },
  {
    "url": "commons-44245099b8091a65abec.js"
  },
  {
    "url": "app-fa6c448b37019194415e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-aeb70cc1f6b99f0edd06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e2a44b63c40e031c82a175df53895a4d"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9kFbqRMkK4.woff2",
    "revision": "ed17386f7c073031a8e746e1babd8600"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9lNaKRMkK4.woff2",
    "revision": "33c7727e334226848226483485f330e4"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9lRa6RMkK4.woff2",
    "revision": "926869267d954c3d720fe517dad67280"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9ldb6RMkK4.woff2",
    "revision": "a33f4c25f92579478643faae618c4103"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS6v5_NC0k9P9H2TbE.woff2",
    "revision": "cac824868e3045bb972e505812806fe5"
  },
  {
    "url": "google-fonts/s/heebo/v7/NGS3v5_NC0k9P9kFbqRMkK4.woff2",
    "revision": "ed17386f7c073031a8e746e1babd8600"
  },
  {
    "url": "google-fonts/s/heebo/v7/NGS3v5_NC0k9P9lNaKRMkK4.woff2",
    "revision": "33c7727e334226848226483485f330e4"
  },
  {
    "url": "google-fonts/s/heebo/v7/NGS3v5_NC0k9P9lRa6RMkK4.woff2",
    "revision": "926869267d954c3d720fe517dad67280"
  },
  {
    "url": "google-fonts/s/heebo/v7/NGS3v5_NC0k9P9ldb6RMkK4.woff2",
    "revision": "a33f4c25f92579478643faae618c4103"
  },
  {
    "url": "google-fonts/s/heebo/v7/NGS6v5_NC0k9P9H2TbE.woff2",
    "revision": "cac824868e3045bb972e505812806fe5"
  },
  {
    "url": "google-fonts/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
    "revision": "1efbd38aa76ddae2580fedf378276333"
  },
  {
    "url": "google-fonts/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ.woff2",
    "revision": "98d8cf792834c0bef59c2be99dc3533d"
  },
  {
    "url": "google-fonts/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2",
    "revision": "b4d2c4c39853ee244272c04999b230ba"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN8rsOUuhp.woff2",
    "revision": "ab3e500e7375695d702cff19513e4470"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2",
    "revision": "24f7b0944e9e03a905f9d7701573b2cd"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhp.woff2",
    "revision": "819af3d3abdc9f135d49b80a91e2ff4c"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "revision": "aa4405ed937295296cf8510f437628e0"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "revision": "61e2d96d01a7eba5ea3ec1bad7e736a8"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwN4rWqZPAA.woff2",
    "revision": "6a9b9c422e662a18013ee064fd789213"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqZPAA.woff2",
    "revision": "911d926608ce81ca8d62e74b7d09d276"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2",
    "revision": "f8b1df51ba843179fa1cc9b53d58127a"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2",
    "revision": "db4a2a231f52e497c0191e8966b0ee58"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2",
    "revision": "ebf6d1640ccddb99fb49f73c052c55a8"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2",
    "revision": "14286f3ba79c6627433572dfa925202e"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2",
    "revision": "da0e717829e033a69dec97f1e155ae42"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOkCnqEu92Fr1MmgVxIIzI.woff2",
    "revision": "7370c3679472e9560965ff48a4399d0b"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2",
    "revision": "51521a2a8da71e50d871ac6fd2187e87"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",
    "revision": "020c97dc8e0463259c2f9df929bb0c69"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2",
    "revision": "ef7c6637c68f269a882e73bcb57a7f6a"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
    "revision": "2735a3a69b509faf3577afd25bdf552e"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4.woff2",
    "revision": "9b3766ef4a402ad3fdeef7501a456512"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "16d4f437e6721b03d396f630f0b10908"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-fa6c448b37019194415e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
