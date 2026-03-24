export interface NavigationPage {
    title: string;
    description: string;
    link: string;
}

export interface NavigationGroup {
    groupTitle: string;
    pages: NavigationPage[];
}
export interface NavigationOption {
    groups: NavigationGroup[];
}

export const appendCacheBust = (url: string) => {
    if (typeof window === "undefined") {
        return url;
    }

    const resolved = new URL(url, window.location.origin);

    if (resolved.origin !== window.location.origin) {
        return url;
    }

    resolved.searchParams.set("t", Date.now().toString());

    return `${resolved.pathname}${resolved.search}${resolved.hash}`;
};

export const freshFetch = (url: string, init: RequestInit = {}) => {
    const headers = new Headers(init.headers ?? undefined);
    headers.set("Cache-Control", "no-cache");
    headers.set("Pragma", "no-cache");

    return fetch(appendCacheBust(url), {
        ...init,
        cache: "no-store",
        headers,
    });
};
