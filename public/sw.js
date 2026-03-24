const IMAGE_CACHE = "atlas-image-v3";
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
    "/favicon.png",
    "/logo/logo1024.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(IMAGE_CACHE).then((cache) => cache.addAll(PRECACHE_IMAGES)),
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
                        .filter((key) => key !== IMAGE_CACHE)
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
    } catch (_) {
        return false;
    }
};

const isFreshContentRequest = (request) => {
    if (request.mode === "navigate" || request.destination === "document") {
        return true;
    }

    try {
        const url = new URL(request.url);
        return /\.(html|json|md)$/i.test(url.pathname);
    } catch (_) {
        return false;
    }
};

self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (request.method !== "GET") {
        return;
    }

    if (isFreshContentRequest(request)) {
        event.respondWith(fetchFresh(request));
        return;
    }

    if (isImageRequest(request)) {
        event.respondWith(cacheImage(event, request));
    }
});

const fetchFresh = async (request) => {
    const freshRequest = new Request(request, {
        cache: "no-store",
    });

    return fetch(freshRequest);
};

const cacheImage = async (event, request) => {
    const cache = await caches.open(IMAGE_CACHE);
    const cached = await cache.match(request);

    if (cached) {
        eventWaitUntilSafe(event, fetchAndUpdate(cache, request));
        return cached;
    }

    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
};

const fetchAndUpdate = async (cache, request) => {
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
    } catch (_) {
    }
};

const eventWaitUntilSafe = (event, promise) => {
    if (event && typeof event.waitUntil === "function") {
        event.waitUntil(promise);
    }
};
