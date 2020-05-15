/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/app-1517904489010.css","89578f77542229f785f1891e148e686c"],["/css/vendor-v1.0.css","e5570db056f6c5c9c1bd276b46bf248c"],["/font/webhostinghub-glyphs.eot","489674a2e8319684f348c331218ee938"],["/font/webhostinghub-glyphs.svg","485aee819563e516dc77c28899bd96eb"],["/font/webhostinghub-glyphs.ttf","f015f8b4d8fc7986ba8a62828831daab"],["/img/btn_facebook_signin.png","74c92781a9e4b85bcf548df09bfc2ba0"],["/img/btn_facebook_signin_1.png","755ce25a73e38e7c3411693ad6ff6727"],["/img/btn_facebook_signin_2.png","b932cddd03b8d9717768f43cad5430e7"],["/img/btn_google.svg","1bb805446b880e7e63cae7ab00433f15"],["/img/btn_google_signin.png","696c081ae56a5d4674d5da24e7810ab7"],["/img/btn_google_signin_2x.png","56f00e35d133cf44f6590c095ce984da"],["/img/cik-logo-beta.svg","6c5bdbf8dfcf8d39cdda33b993f924cb"],["/img/cik-logo-desktop-fire.png","36a56911d212671235968779104f80b0"],["/img/cik-logo-desktop-fire.svg","cbf12c13d21b05bed2413717c5bf11fc"],["/img/cik-logo-desktop.svg","e33dd8c9d446f2c7333e5c0452502e68"],["/img/cik-logo-mobile-fire.svg","32626b2a47a572f4a3b50ef775324c92"],["/img/cik-logo-mobile-fire1.svg","d0e2e5af7e35176087decf1e3219dd8d"],["/img/cik-logo-mobile-smaller.svg","c1a9980ebce99da029aed38c387fcb54"],["/img/cik-logo-mobile.svg","79fcbd3dddeee3519048ba718d51a4d6"],["/img/cik.svg","a8fc4f2cf0d206de68eb552328470f8d"],["/img/ck-logo-beta.svg","bea931c7d02b5ea2da548854ad2bb3ee"],["/img/favicon-114x114.png","aac875c11c2155a25c46867ab382cab8"],["/img/favicon-120x120.png","ac0c0ed6d527b6c407ba44fdfdbc8af9"],["/img/favicon-144x144.png","90176719c253893ffec9a7cb957a98ef"],["/img/favicon-152x152.png","d1163bb8078df557ac3afc471900dc57"],["/img/favicon-16x16.png","2ad39fc5b6c6d5078eeaa2cdeeba31ba"],["/img/favicon-180x180.png","34cae5c7930489e14f250d86fcb28d73"],["/img/favicon-32x32.png","cd7be877f75a1bae2cc1ecbf56e0ecd3"],["/img/favicon-48x48.png","a7a114295fb8599235d5ab6f2a880cb3"],["/img/favicon-512x512.png","65fae21e4fad49036a6c55c3c41155b1"],["/img/favicon-57x57.png","147ded56ba2cc32dfe10b759a153352e"],["/img/favicon-60x60.png","85daa903fab7980122020f0509842635"],["/img/favicon-72x72.png","740300b95c988bcac008f79178bc5b1c"],["/img/favicon-76x76.png","87cea7ea75eb5709e27904d0473eeec0"],["/img/favicon-96x96.png","3a83bd1b06bad4f0514a7336a93e8f33"],["/img/favicon.png","653dacc7a05094b9409c0a9ecd6f71a4"],["/img/lunchbox-100.png","bb56314a77f246554be5d0cf1eb53186"],["/img/lunchbox-app-100.png","bb56314a77f246554be5d0cf1eb53186"],["/img/lunchbox-gray-100.png","4d00c5375c2be7fe4ec7a9635a2d57af"],["/img/lunchbox-white-100.png","a2daf84a78c2cc318f808f634b6d9ad4"],["/img/old-favicon.png","aedf8044b2fcf90f714845d14468c61a"],["/img/powered_by_stripe.png","12d8c3aaa26002089c14e9c220d96903"],["/img/saltdKurry-black.svg","1d7ce3a077ed1a30cd75424c414334d6"],["/img/saltdKurry-cook-1.jpg","0a5a89ae67f86c7ddb1bef849cb0685d"],["/img/saltdKurry-cook-mobile.jpg","b435b99dff0f6197838f16460dadeed6"],["/img/saltdKurry-cook-mobile1.jpg","ae9025773f9705d80e0950fa1c59d1cb"],["/img/saltdKurry-cook-toss-desktop.jpg","12f2ee726b7c0d585603397b28e126fd"],["/img/saltdKurry-cook-toss-mobile.jpg","1486fa5ea650259be7209bb99a4ee73e"],["/img/saltdKurry-cook.jpg","ef76c15eed94d085abcda39a32654293"],["/img/saltdKurry-desktop.jpg","cf049def225c877f173733d809ea0ed8"],["/img/saltdKurry-how-it-works-desktop.jpg","a5e82d28946b47932a5ae4ffe990243a"],["/img/saltdKurry-how-it-works-mobile.jpg","77eac1025eff82600aa9fe3403c8ddac"],["/img/saltdKurry-landing-food-healthy-hand-cooking.jpg","24404a8445605ed7923516b20a10a743"],["/img/saltdKurry-mobile.jpg","ea8ca2b6c785e5c1625821ca98b3952d"],["/img/saltdKurry.svg","67096adc2cbb43dab94bebe62ced64d1"],["/img/saltdkurry-baker-desktop-v1.jpg","845f2fee04fbca9769e94b2f0b659d09"],["/img/saltdkurry-baker-mobile-v1.jpg","4933745b9c495e0ec898ff2e09da4a31"],["/img/saltdkurry-cook-desktop-v1.jpg","4bd0d1d6f5085f28d96622518df1e9df"],["/img/saltdkurry-cook-mobile-v1.jpg","b93f2a5ef120b3a51f99fc54bb94b0bf"],["/img/saltdkurry-gray.png","be11d16a25c9e3fe015516e78e7cc2b4"],["/img/saltdkurry-gray.svg","cf62123dbb6c3e5d2e110f8429ad710c"],["/img/saltdkurry-landing-desktop-v1.jpg","ba10e991ccb61c909509f293c1b9fe3d"],["/img/saltdkurry-landing-mobile-v1.jpg","d41d8e6f29b9c3bea571fd7812dd7a79"],["/img/saltdkurry-white.png","ff6400639149e75dfa8809bf7f4ab2e2"],["/img/saltdkurry-white.svg","7fc6ce8a61be72a302d2c4bf3f8e6203"],["/img/stripe-blue-on-light@2x.png","e95f2d63f97cc7d021f289f55d7880e6"],["/img/thecookinkitchen.jpg","fde5d2ea8d040d4b1bcfb256fe5f0567"],["/img/thecookinkitchen1.jpg","46344400225f70b23b937e48190e2dae"],["/img/thecookinkitchen2.jpg","42efdf521f13ccc2575c7fea7c0657ae"],["/img/thecookinkitchen3.jpg","22332c014f09fe75b0ba7a347b4af106"],["/index.html","3dcb76ffbddcb8ba8b18d2ebf41e2f28"],["/js/app-1517904489010.js","0cb794d4a39863a3caa9d234ebf42eba"],["/js/vendor-v1.0.js","2fcece21d7cd8a2beff3866882fc2aff"],["/manifest.json","7810cd4c51c2dfd3870e895cd5d98346"]];
var cacheName = 'sw-precache-v2-on-demand-cook-' + (self.registration ? self.registration.scope : '');




var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.(js|css)$/);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});





self.addEventListener('push', function(event) {
    console.log('Push message received', event);
    var payload;
    var defaultPayload = {
        'title':'New Notification',
        'body':'',
        'tag':''
    };
    try {
        payload = event.data ? event.data.json() : defaultPayload;
    }
    catch(err) {
        console.log(err);
        payload = defaultPayload;
    }

    event.waitUntil(
        self.registration.showNotification(payload.title, {
            body: payload.body,
            icon: 'img/favicon.png',
            tag: payload.tag
        }));
});
self.addEventListener('notificationclick', function(event) {
    console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var url = 'https://www.saltdkurry.com';
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
            .then(function(windowClients) {
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    if (client.url.includes(url) && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(url+'/'+event.notification.tag);
                }
            })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        // Should we call event.respondWith() inside this fetch event handler?
        // This needs to be determined synchronously, which will give other fetch
        // handlers a chance to handle the request if need be.
        var shouldRespond;

        // First, remove all the ignored parameter and see if we have that URL
        // in our cache. If so, great! shouldRespond will be true.
        var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
        shouldRespond = urlsToCacheKeys.has(url);

        // If shouldRespond is false, check again, this time with 'index.html'
        // (or whatever the directoryIndex option is set to) at the end.

        /*var directoryIndex = 'index.html';
        if (!shouldRespond && directoryIndex) {
            url = addDirectoryIndex(url, directoryIndex);
            shouldRespond = urlsToCacheKeys.has(url);
        }*/

        // If shouldRespond is still false, check to see if this is a navigation
        // request, and if so, whether the URL matches navigateFallbackWhitelist.
        var navigateFallback = '';
        if (!shouldRespond &&
            navigateFallback &&
            (event.request.mode === 'navigate') &&
            isPathWhitelisted([], event.request.url)) {
            url = new URL(navigateFallback, self.location).toString();
            shouldRespond = urlsToCacheKeys.has(url);
        }

        // If shouldRespond was set to true at any point, then call
        // event.respondWith(), using the appropriate cache key.
        if (shouldRespond) {
            event.respondWith(
                caches.open(cacheName).then(function(cache) {
                    return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
                        if (response) {
                            return response;
                        }
                        throw Error('The cached response that was expected is missing.');
                    });
                }).catch(function(e) {
                    // Fall back to just fetch()ing the request if some unexpected error
                    // prevented the cached response from being valid.
                    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                    return fetch(event.request);
                })
            );
        } else {
            if (event.request.mode === 'navigate' && event.request.method === 'GET') {

                var url = new URL(event.request.url);
                event.respondWith(
                    fetch(event.request)
                        .then(function(response) {
                            return response;
                        }, function(err) {
                            console.log('Network error: ', err);

                            return caches.open(cacheName).then(function(cache) {
                                return cache.match(urlsToCacheKeys.get(url.origin + '/index.html')).then(function(response) {
                                    if (response) {
                                        return response;
                                    }
                                });
                            }).catch(function(e) {
                                console.log('error: ',e);
                            });
                        })
                        .catch(function(error) {
                            console.log('Request failed:', error);
                        })
                );
            }
        }
    }
});

var ignoreUrlParametersMatching = [/^utm_/];