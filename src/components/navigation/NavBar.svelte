<script lang="ts">
    import { ChevronDown, Menu, X } from "@lucide/svelte";
    import { onMount } from "svelte";
    import NavigationOptions from "./NavigationOptions.svelte";
    import type { NavigationOption } from "../../scripts/utils";

    let showEngineCard = $state(false);
    let showLearnCard = $state(false);
    let mobileMenuOpen = $state(false);

    const toggleMobileMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
    };

    const closeMobileMenu = () => {
        mobileMenuOpen = false;
    };

    let engineGroup: NavigationOption = {
        groups: [
            {
                groupTitle: "About the Engine",
                pages: [
                    {
                        title: "Atlas",
                        description: "Learn about the Atlas Engine",
                        link: "/overview/atlas",
                    },
                ],
            },
            {
                groupTitle: "About the Project",
                pages: [
                    {
                        title: "Roadmap",
                        description: "See the future plans for Atlas Engine",
                        link: "/roadmap/latest",
                    },
                    {
                        title: "Contributing",
                        description:
                            "Find out how to contribute to Atlas Engine",
                        link: "/overview/contributing",
                    },
                    {
                        title: "Releases",
                        description: "View the release history of Atlas Engine",
                        link: "/overview/releases",
                    },
                    {
                        title: "Architecture",
                        description:
                            "Understand the architecture of Atlas Engine",
                        link: "/overview/architecture",
                    },
                ],
            },
        ],
    };

    let learnGroup: NavigationOption = {
        groups: [
            {
                groupTitle: "Getting Started",
                pages: [
                    {
                        title: "Installation",
                        description: "How to install Atlas Engine",
                        link: "/learn/installation",
                    },
                    {
                        title: "First Project",
                        description: "Create your first project with Atlas",
                        link: "/learn/first-project",
                    },
                ],
            },
            {
                groupTitle: "Tutorials",
                pages: [
                    {
                        title: "Other Tutorials",
                        description: "Explore more tutorials for Atlas Engine",
                        link: "/learn/other-tutorials",
                    },
                ],
            },
        ],
    };

    const flattenPages = (groups: NavigationOption["groups"]) =>
        groups.flatMap((group) => group.pages ?? []);

    const overviewPages = flattenPages(engineGroup.groups ?? []);
    const learnPages = flattenPages(learnGroup.groups ?? []);

    const staticLinks = [
        { label: "About", href: "/about" },
        { label: "News", href: "/news" },
    ];

    const documentationLink = {
        label: "Documentation",
        href: "https://docs.atlasengine.org",
    };

    onMount(() => {
        if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
            return;
        }

        navigator.serviceWorker
            .getRegistration()
            .then((registration) => {
                if (!registration) {
                    return navigator.serviceWorker.register("/sw.js", {
                        scope: "/",
                    });
                }
                return registration;
            })
            .catch((error) => {
                console.error("Service worker registration failed", error);
            });
    });
</script>

<header
    class="fixed top-0 left-0 z-40 flex h-16 w-full items-center gap-4 border border-gray-700 bg-gray-950/20 px-4 shadow-md backdrop-blur-sm sm:px-8"
>
    <div class="flex flex-1 items-center">
        <img
            src="/logo/logo1024.png"
            alt="Atlas Engine Logo"
            class="h-8 w-8 mr-4"
        />
        <a class="text-white font-sans font-bold" href="/">Atlas Engine</a>
    </div>
    <nav class="hidden gap-6 lg:flex">
        <div
            class="relative flex items-center"
            role="button"
            tabindex="0"
            onmouseenter={() => {
                showEngineCard = true;
            }}
            onmouseleave={() => {
                showEngineCard = false;
            }}
        >
            <p
                class="text-gray-200 font-sans flex items-center cursor-pointer leading-none gap-1"
            >
                <span>Overview</span>
                <ChevronDown class="h-4 w-4" />
            </p>
            {#if showEngineCard}
                <NavigationOptions rawOptions={engineGroup}></NavigationOptions>
            {/if}
        </div>
        <div
            class="relative flex items-center"
            role="button"
            tabindex="0"
            onmouseenter={() => {
                showLearnCard = true;
            }}
            onmouseleave={() => {
                showLearnCard = false;
            }}
        >
            <p
                class="text-gray-200 font-sans flex items-center cursor-pointer leading-none gap-1"
            >
                <span>Learn</span>
                <ChevronDown class="h-4 w-4" />
            </p>
            {#if showLearnCard}
                <NavigationOptions rawOptions={learnGroup}></NavigationOptions>
            {/if}
        </div>
        {#each staticLinks as link}
            <a class="text-gray-200 font-sans" href={link.href}>{link.label}</a>
        {/each}
        <a
            class="text-gray-200 font-sans"
            href={documentationLink.href}
            target="_blank"
            rel="noreferrer">{documentationLink.label}</a
        >
    </nav>
    <div class="relative group hidden lg:block">
        <div
            class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-aurora"
        ></div>
        <button
            onclick={() => {
                window.location.href = "/download";
            }}
            class="relative bg-blue-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-blue-700 transition border border-blue-500 shadow-lg hover:cursor-pointer"
            >Download</button
        >
    </div>
    <button
        class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900/70 text-white"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        onclick={toggleMobileMenu}
    >
        {#if mobileMenuOpen}
            <X class="h-5 w-5" />
        {:else}
            <Menu class="h-5 w-5" />
        {/if}
    </button>
</header>

{#if mobileMenuOpen}
    <div class="fixed inset-0 z-30 lg:hidden" aria-modal="true" role="dialog">
        <div
            class="absolute inset-0 bg-black/50"
            onclick={closeMobileMenu}
            aria-hidden="true"
        ></div>
        <div
            class="absolute inset-x-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-800 bg-gray-950/95 px-4 pb-10"
        >
            <div
                class="mx-auto flex w-full max-w-md flex-col gap-8 py-6 text-white"
            >
                <section class="space-y-3">
                    <p class="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Overview
                    </p>
                    <div class="space-y-2">
                        {#each overviewPages as page}
                            <a
                                class="block rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3"
                                href={page.link}
                                onclick={closeMobileMenu}
                            >
                                <p class="font-semibold">{page.title}</p>
                                {#if page.description}
                                    <p class="text-sm text-gray-400">
                                        {page.description}
                                    </p>
                                {/if}
                            </a>
                        {/each}
                    </div>
                </section>

                <section class="space-y-3">
                    <p class="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Learn
                    </p>
                    <div class="space-y-2">
                        {#each learnPages as page}
                            <a
                                class="block rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3"
                                href={page.link}
                                onclick={closeMobileMenu}
                            >
                                <p class="font-semibold">{page.title}</p>
                                {#if page.description}
                                    <p class="text-sm text-gray-400">
                                        {page.description}
                                    </p>
                                {/if}
                            </a>
                        {/each}
                    </div>
                </section>

                <section class="space-y-3">
                    <p class="text-xs uppercase tracking-[0.2em] text-gray-400">
                        More
                    </p>
                    <div class="space-y-2">
                        {#each staticLinks as link}
                            <a
                                class="block rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3"
                                href={link.href}
                                onclick={closeMobileMenu}
                            >
                                <p class="font-semibold">{link.label}</p>
                            </a>
                        {/each}
                        <a
                            class="block rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3"
                            href={documentationLink.href}
                            target="_blank"
                            rel="noreferrer"
                            onclick={closeMobileMenu}
                        >
                            <p class="font-semibold">
                                {documentationLink.label}
                            </p>
                            <p class="text-sm text-gray-400">
                                Opens in a new tab
                            </p>
                        </a>
                    </div>
                </section>

                <section class="space-y-3">
                    <button
                        class="w-full rounded-2xl border border-blue-500 bg-blue-600 py-3 font-semibold text-white shadow-lg"
                        onclick={() => {
                            window.location.href = "/download";
                            closeMobileMenu();
                        }}
                    >
                        Download Atlas
                    </button>
                </section>
            </div>
        </div>
    </div>
{/if}

<style>
    @keyframes aurora {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-aurora {
        background-size: 200% 200%;
        animation: aurora 3s ease infinite;
    }
</style>
