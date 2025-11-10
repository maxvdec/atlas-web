<script lang="ts">
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";
    import Footer from "./navigation/Footer.svelte";
    import NavBar from "./navigation/NavBar.svelte";
    import Introduction from "./ui/Introduction.svelte";
    import BentoLayout from "./ui/bento/BentoLayout.svelte";
    import BentoRow from "./ui/bento/BentoRow.svelte";
    import BentoCard from "./ui/bento/BentoCard.svelte";

    interface ReleaseConfigEntry {
        name: string;
        url: string;
        tag: string;
        blogPost?: string;
        imageURL?: string;
    }

    interface ReleasesJson {
        releases: Record<string, ReleaseConfigEntry>;
    }

    interface GithubReleaseAsset {
        name: string;
        browser_download_url: string;
    }

    interface GithubRelease {
        name: string;
        body?: string;
        body_html?: string;
        html_url: string;
        published_at?: string;
        assets?: GithubReleaseAsset[];
    }

    let { releaseKey } = $props<{ releaseKey: string }>();

    let loading = $state(true);
    let errorMessage = $state<string | null>(null);
    let releaseData = $state<{
        config: ReleaseConfigEntry;
        github: GithubRelease;
        downloadUrl: string | null;
        notesHtml: string;
    } | null>(null);

    const markdown = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
    });

    const openReleasePage = () => {
        if (!releaseData) {
            return;
        }

        window.open(releaseData.github.html_url, "_blank");
    };

    const downloadRelease = () => {
        if (!releaseData?.downloadUrl) {
            return;
        }

        window.open(releaseData.downloadUrl, "_blank");
    };

    const heroImage = (config: ReleaseConfigEntry | undefined, key: string) => {
        if (config?.imageURL && config.imageURL.trim() !== "") {
            return config.imageURL;
        }

        if (key.toLowerCase().startsWith("prealpha")) {
            return "/images/sponza.png";
        }

        return "/images/landing.png";
    };

    const formatDate = (isoDate?: string) => {
        if (!isoDate) {
            return "Release date pending";
        }

        const date = new Date(isoDate);
        if (Number.isNaN(date.getTime())) {
            return "Release date pending";
        }

        return `Released on ${date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })}`;
    };

    const findDownload = (assets?: GithubReleaseAsset[]) => {
        if (!assets) {
            return null;
        }

        const direct = assets.find(
            (asset) => asset.name.toLowerCase() === "atlas",
        );

        if (direct) {
            return direct.browser_download_url;
        }

        const fuzzy = assets.find((asset) =>
            asset.name.toLowerCase().includes("atlas"),
        );

        return fuzzy ? fuzzy.browser_download_url : null;
    };

    onMount(async () => {
        try {
            const configResponse = await fetch("/releases.json");
            if (!configResponse.ok) {
                throw new Error("Unable to load releases configuration.");
            }

            const configJson = (await configResponse.json()) as ReleasesJson;
            const config = configJson.releases?.[releaseKey];

            if (!config) {
                throw new Error("Release not found.");
            }

            const githubResponse = await fetch(config.url, {
                headers: {
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            });

            if (!githubResponse.ok) {
                throw new Error(
                    "Unable to retrieve GitHub release information.",
                );
            }

            const githubRelease =
                (await githubResponse.json()) as GithubRelease;

            const downloadUrl = findDownload(githubRelease.assets);
            const notesHtml = markdown.render(githubRelease.body ?? "");

            releaseData = {
                config,
                github: githubRelease,
                downloadUrl,
                notesHtml,
            };
            errorMessage = null;
        } catch (error) {
            console.error(error);
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while loading this release.";
            releaseData = null;
        } finally {
            loading = false;
        }
    });
</script>

<div>
    <NavBar></NavBar>

    {#if releaseData}
        <Introduction
            name={releaseData.github.name || releaseData.config.name}
            description={formatDate(releaseData.github.published_at)}
            imageSrc={heroImage(releaseData.config, releaseKey)}
        ></Introduction>
    {:else}
        <Introduction
            name="Release unavailable"
            description={errorMessage ?? "We could not load this release."}
            imageSrc="/images/sponza2.png"
        ></Introduction>
    {/if}

    <div class="w-full px-6 text-white sm:px-8">
        <div class="mx-auto flex w-full max-w-[1200px] flex-col gap-12">
            {#if loading}
                <div class="flex justify-center py-20 text-gray-300">
                    Loading release details...
                </div>
            {:else if errorMessage}
                <div
                    class="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-red-200"
                >
                    {errorMessage}
                </div>
            {:else if releaseData}
                <BentoLayout spacing="3rem">
                    <BentoRow>
                        <BentoCard autoHeight reveal={{ x: -80, y: 0 }}>
                            <h2 class="font-sans text-3xl font-bold text-white">
                                Release overview
                            </h2>
                            <div class="mt-6 space-y-4 text-gray-300">
                                <div
                                    class="rounded-3xl border border-gray-700 bg-gray-800/60 p-5"
                                >
                                    <p
                                        class="font-sans text-sm uppercase tracking-widest text-sky-400"
                                    >
                                        Tag
                                    </p>
                                    <p
                                        class="font-sans text-xl font-semibold text-white"
                                    >
                                        {releaseData.config.tag}
                                    </p>
                                </div>
                                <div
                                    class="rounded-3xl border border-gray-700 bg-gray-800/60 p-5"
                                >
                                    <p
                                        class="font-sans text-sm uppercase tracking-widest text-sky-400"
                                    >
                                        Published
                                    </p>
                                    <p
                                        class="font-sans text-xl font-semibold text-white"
                                    >
                                        {formatDate(
                                            releaseData.github.published_at,
                                        ).replace("Released on ", "")}
                                    </p>
                                </div>
                                {#if releaseData.config.blogPost && releaseData.config.blogPost !== ""}
                                    <div
                                        class="rounded-3xl border border-gray-700 bg-gray-800/60 p-5"
                                    >
                                        <p
                                            class="font-sans text-sm uppercase tracking-widest text-sky-400"
                                        >
                                            Deep dive
                                        </p>
                                        <a
                                            class="font-sans text-xl font-semibold text-sky-300 hover:text-sky-200"
                                            href={releaseData.config.blogPost}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Read the blog post →
                                        </a>
                                    </div>
                                {/if}
                            </div>
                        </BentoCard>

                        <BentoCard autoHeight reveal={{ x: 80, y: 0 }}>
                            <h2 class="font-sans text-3xl font-bold text-white">
                                Release notes
                            </h2>
                            <div
                                class="release-notes mt-6 space-y-4 text-gray-300 leading-relaxed"
                            >
                                {@html releaseData.notesHtml}
                            </div>
                        </BentoCard>
                    </BentoRow>

                    <BentoRow>
                        <BentoCard
                            autoHeight
                            class="flex flex-col gap-6 from-gray-800 to-gray-900 bg-linear-to-b border border-gray-700 rounded-4xl shadow-md p-6 overflow-hidden mb-10"
                            reveal={{ x: 0, y: 60 }}
                        >
                            <h2 class="font-sans text-3xl font-bold text-white">
                                Get the build
                            </h2>
                            <p class="font-sans text-gray-300">
                                Download the executable or keep exploring the
                                full release discussion on GitHub.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    class="relative rounded-2xl border border-blue-500 bg-blue-600 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-blue-700"
                                    onclick={openReleasePage}
                                >
                                    Go to release
                                </button>
                                <button
                                    class={`relative rounded-2xl border border-cyan-500 bg-cyan-600 px-6 py-2 font-sans text-white shadow-lg transition ${releaseData?.downloadUrl ? "hover:bg-cyan-500" : "opacity-50 cursor-not-allowed"}`}
                                    onclick={downloadRelease}
                                >
                                    Download
                                </button>
                            </div>
                            {#if !releaseData.downloadUrl}
                                <p class="text-sm text-gray-400">
                                    No executable asset named "atlas" was found
                                    for this release.
                                </p>
                            {/if}
                        </BentoCard>
                    </BentoRow>
                </BentoLayout>
            {/if}
        </div>
    </div>

    <Footer></Footer>
</div>

<style>
    :global(.release-notes h1),
    :global(.release-notes h2),
    :global(.release-notes h3),
    :global(.release-notes h4) {
        color: #ffffff;
        font-family: var(--tw-font-sans, "Inter", sans-serif);
        font-weight: 700;
        margin-top: 1.5rem;
    }

    :global(.release-notes h1) {
        font-size: 2.25rem;
    }

    :global(.release-notes h3) {
        font-size: 1.5rem;
    }

    :global(.release-notes ul) {
        list-style: disc;
        padding-left: 1.5rem;
    }

    :global(.release-notes ol) {
        list-style: decimal;
        padding-left: 1.5rem;
    }

    :global(.release-notes li + li) {
        margin-top: 0.5rem;
    }

    :global(.release-notes a) {
        color: #38bdf8;
        text-decoration: underline;
    }

    :global(.release-notes code) {
        background: rgba(148, 163, 184, 0.15);
        border-radius: 0.375rem;
        padding: 0.15rem 0.4rem;
        font-family: var(--tw-font-mono, "Fira Code", monospace);
        font-size: 0.95em;
    }
</style>
