<script lang="ts">
    import { onMount } from "svelte";
    import { ChevronRight, Download } from "@lucide/svelte";
    import Footer from "./navigation/Footer.svelte";
    import NavBar from "./navigation/NavBar.svelte";

    interface ReleasesConfigEntry {
        name: string;
        url: string;
        tag: string;
    }

    interface ReleasesConfig {
        latest: string;
        releases: Record<string, ReleasesConfigEntry>;
    }

    interface GithubReleaseAsset {
        name: string;
        browser_download_url: string;
    }

    interface GithubRelease {
        assets?: GithubReleaseAsset[];
        html_url: string;
    }

    let status = $state<string>("Preparing your download…");
    let errorMessage = $state<string | null>(null);
    let manualDownloadUrl = $state<string | null>(null);
    let releasePageUrl = $state<string | null>(null);

    const triggerDownload = (url: string) => {
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "atlas";
        anchor.rel = "noopener";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    const findAtlasAsset = (assets?: GithubReleaseAsset[]) => {
        if (!assets) {
            return null;
        }

        return (
            assets.find((asset) => asset.name.toLowerCase() === "atlas") ??
            assets.find((asset) =>
                asset.name.toLowerCase().includes("atlas"),
            ) ??
            null
        );
    };

    onMount(async () => {
        try {
            const configResponse = await fetch("/releases.json");
            if (!configResponse.ok) {
                throw new Error("Unable to load releases configuration.");
            }

            const config = (await configResponse.json()) as ReleasesConfig;
            const latestKey = config.latest;
            const latest = config.releases?.[latestKey];

            if (!latest) {
                throw new Error("Latest release information is missing.");
            }

            const releaseResponse = await fetch(latest.url, {
                headers: {
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            });

            if (!releaseResponse.ok) {
                throw new Error(
                    "Unable to retrieve release details from GitHub.",
                );
            }

            const githubRelease =
                (await releaseResponse.json()) as GithubRelease;
            releasePageUrl = githubRelease.html_url;
            const asset = findAtlasAsset(githubRelease.assets);

            if (!asset) {
                throw new Error(
                    "No executable named 'atlas' was found in the latest release.",
                );
            }

            manualDownloadUrl = asset.browser_download_url;
            status = "Download should start automatically.";
            triggerDownload(asset.browser_download_url);
        } catch (error) {
            console.error(error);
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while preparing your download.";
            status = "Unable to start download automatically.";
            if (!releasePageUrl) {
                releasePageUrl = "/overview/releases";
            }
        }
    });

    const retryDownload = () => {
        if (manualDownloadUrl) {
            triggerDownload(manualDownloadUrl);
        }
    };
</script>

<div>
    <NavBar></NavBar>
    <div class="aurora-container h-120 mb-50">
        <div class="aurora-backdrop"></div>
        <div
            class="aurora-content flex flex-col justify-center items-center text-center pt-40"
        >
            <p class="text-white text-6xl font-bold">
                Thank you for downloading Atlas!
            </p>
            <p class="mt-6 text-white/80 font-sans text-lg">{status}</p>
            {#if errorMessage}
                <p class="mt-4 text-rose-300 font-sans text-base">
                    {errorMessage}
                </p>
            {/if}
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                    class="flex items-center justify-center gap-2 rounded-2xl border border-cyan-500 bg-cyan-600/90 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
                    onclick={retryDownload}
                    disabled={!manualDownloadUrl}
                >
                    <Download class="h-5 w-5" />
                    Download again
                </button>
                {#if releasePageUrl}
                    <a
                        class="flex items-center justify-center gap-2 rounded-2xl border border-blue-500 bg-blue-600/80 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-blue-500"
                        href={releasePageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open release notes
                    </a>
                {/if}
            </div>
            <a
                href="/learn/first-project"
                class="mt-10 inline-flex items-center text-white font-sans text-xl hover:glow"
                >Try out our starter guide <ChevronRight></ChevronRight></a
            >
            <a
                href="/overview/releases"
                class="mt-6 inline-flex items-center text-white font-sans text-xl hover:glow"
                >Check other releases <ChevronRight></ChevronRight></a
            >
        </div>
    </div>
    <Footer></Footer>
</div>

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

    .aurora-container {
        position: relative;
        isolation: isolate;
        margin-top: 1.5rem;
    }

    .aurora-backdrop {
        position: absolute;
        inset: -4rem -2rem;
        background: linear-gradient(
            120deg,
            #ff6b6b,
            #ffde59,
            #4de98a,
            #4db7ff,
            #7b4dff,
            #ff6b6b
        );
        background-size: 400% 400%;
        filter: blur(80px);
        opacity: 0.75;
        animation: auroraGradient 20s ease infinite;
        pointer-events: none;
        border-radius: 3rem;
        z-index: 0;
    }

    .aurora-content {
        position: relative;
        z-index: 1;
    }

    @keyframes auroraGradient {
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

    .hover\:glow,
    .glow {
        position: relative;
        display: flex;
        transition:
            transform 160ms ease,
            text-shadow 160ms ease,
            color 160ms ease;
        will-change: transform, text-shadow;
        text-decoration: none;
    }

    .hover\:glow:hover,
    .glow:hover {
        transform: translateY(-3px);
        text-shadow:
            0 2px 6px rgba(0, 0, 0, 0.45),
            0 0 6px rgba(77, 183, 255, 0.25),
            0 0 20px rgba(123, 77, 255, 0.18),
            0 0 40px rgba(255, 107, 107, 0.06);
        color: #fff;
    }

    .hover\:glow::after,
    .glow::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -6px;
        width: calc(100% + 48px);
        height: 18px;
        border-radius: 999px;
        pointer-events: none;
        opacity: 0;
        transition:
            opacity 160ms ease,
            transform 160ms ease;
        background: radial-gradient(
            closest-side,
            rgba(77, 183, 255, 0.28),
            rgba(123, 77, 255, 0.18) 40%,
            rgba(0, 0, 0, 0) 70%
        );
        filter: blur(12px);
        z-index: -1;
    }

    .hover\:glow:hover::after,
    .glow:hover::after {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
        animation: glowPulse 2.2s ease-in-out infinite;
    }

    @keyframes glowPulse {
        0% {
            transform: translateX(-50%) translateY(0) scaleX(0.98);
            opacity: 0.9;
            filter: blur(10px);
        }
        50% {
            transform: translateX(-50%) translateY(-1px) scaleX(1.02);
            opacity: 1;
            filter: blur(14px);
        }
        100% {
            transform: translateX(-50%) translateY(0) scaleX(0.98);
            opacity: 0.9;
            filter: blur(10px);
        }
    }

    .hover\:glow:focus,
    .glow:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(77, 183, 255, 0.12);
    }
</style>
