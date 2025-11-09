<script lang="ts">
    import { ChevronDown } from "@lucide/svelte";
    import NavigationOptions from "./NavigationOptions.svelte";
    import type {
        NavigationGroup,
        NavigationOption,
    } from "../../scripts/utils";

    let showEngineCard = $state(false);
    let showLearnCard = $state(false);

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
                    {
                        title: "Features",
                        description: "Discover the features of Atlas Engine",
                        link: "/overview/features",
                    },
                ],
            },
            {
                groupTitle: "About the Project",
                pages: [
                    {
                        title: "Roadmap",
                        description: "See the future plans for Atlas Engine",
                        link: "/overview/roadmap",
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
                        title: "Basic Tutorial",
                        description: "Learn the basics of Atlas Engine",
                        link: "/learn/basic-tutorial",
                    },
                    {
                        title: "Advanced Tutorial",
                        description: "Master advanced features of Atlas Engine",
                        link: "/learn/advanced-tutorial",
                    },
                    {
                        title: "Other Tutorials",
                        description: "Explore more tutorials for Atlas Engine",
                        link: "/learn/other-tutorials",
                    },
                ],
            },
        ],
    };
</script>

<header
    class="w-full h-16 bg-gray-950/20 fixed top-0 left-0 flex items-center justify-between px-8 shadow-md z-40 border border-gray-700 backdrop-blur-sm"
>
    <div class="flex items-center">
        <img
            src="/logo/logo1024.png"
            alt="Atlas Engine Logo"
            class="h-8 w-8 mr-4"
        />
        <a class="text-white font-sans font-bold" href="/">Atlas Engine</a>
    </div>
    <nav class="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
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
                class="text-gray-200 font-sans flex items-center cursor-pointer leading-none"
            >
                <span>Overview</span>
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
                class="text-gray-200 font-sans flex items-center cursor-pointer leading-none"
            >
                <span>Learn</span>
            </p>
            {#if showLearnCard}
                <NavigationOptions rawOptions={learnGroup}></NavigationOptions>
            {/if}
        </div>
        <a class="text-gray-200 font-sans" href="/community">Community</a>
        <a class="text-gray-200 font-sans" href="/about">About</a>
        <a class="text-gray-200 font-sans" href="/news">News</a>
        <a class="text-gray-200 font-sans" href="/documentation"
            >Documentation</a
        >
    </nav>
    <div class="relative group">
        <div
            class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-aurora"
        ></div>
        <button
            class="relative bg-blue-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-blue-700 transition border border-blue-500 shadow-lg hover:cursor-pointer"
            >Download</button
        >
    </div>
</header>

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
