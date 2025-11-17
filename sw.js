const STATIC_CACHE = "atlas-static-v2";
const IMAGE_CACHE = "atlas-image-v2";
const STATIC_ASSETS = ["/", "/favicon.png", "/logo/logo1024.png"];
const PRECACHE_IMAGES = [
    "/images/landing.png",
    "/images/atlas_ball.png",
    "/images/vscode_modules.png",
    "/images/open_source.svg",
    "/images/code_example.png",
    "/images/create_example.png",
    "/images/sponza.png",
    "/images/sponza2.png",
    "/images/sponza3.png",
    "/images/sponza4.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        Promise.all([
            caches
                .open(STATIC_CACHE)
                .then((cache) => cache.addAll(STATIC_ASSETS)),
            caches
                .open(IMAGE_CACHE)
                .then((cache) => cache.addAll(PRECACHE_IMAGES)),
        ]),
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((key) =>
                            ![STATIC_CACHE, IMAGE_CACHE].includes(key),
                        )
                        .map((key) => caches.delete(key)),
                ),
            )
            .then(() => self.clients.claim()),
    );
});

const isImageRequest = (request) => {
    if (request.destination === "image") {
        return true;
    }

    try {
        const url = new URL(request.url);
        return /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(url.pathname);
    } catch (error) {
        return false;
    }
};

self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (request.method !== "GET") {
        return;
    }

    if (isImageRequest(request)) {
        event.respondWith(cacheImage(event, request));
        return;
    }

    if (STATIC_ASSETS.includes(new URL(request.url).pathname)) {
        event.respondWith(cacheStatic(request));
    }
});

const cacheStatic = async (request) => {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    if (cached) {
        return cached;
    }

    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
};

const cacheImage = async (event, request) => {
    const cache = await caches.open(IMAGE_CACHE);
    const cached = await cache.match(request);

    if (cached) {
        eventWaitUntilSafe(event, fetchAndUpdate(cache, request));
        return cached;
    }

    try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error) {
        if (cached) {
            return cached;
        }
        throw error;
    }
};

const fetchAndUpdate = async (cache, request) => {
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
    } catch (_) {
        // Ignore network errors; cache already has a copy
    }
};

const eventWaitUntilSafe = (event, promise) => {
    if (event && typeof event.waitUntil === "function") {
        event.waitUntil(promise);
    }
};
