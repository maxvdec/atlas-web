<script lang="ts">
    import { onMount } from "svelte";
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
    }

    interface ReleasesJson {
        latest: string;
        releases: Record<string, ReleaseConfigEntry>;
    }

    interface ReleaseListItem extends ReleaseConfigEntry {
        key: string;
        publishedAt: string | null;
    }

    let alphaReleases = $state<ReleaseListItem[]>([]);
    let preAlphaReleases = $state<ReleaseListItem[]>([]);
    let loading = $state(true);
    let errorMessage = $state<string | null>(null);

    const formatDate = (isoDate: string | null) => {
        if (!isoDate) {
            return "Date pending";
        }

        const date = new Date(isoDate);
        if (Number.isNaN(date.getTime())) {
            return "Date pending";
        }

        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const categorizeRelease = (key: string, item: ReleaseListItem) => {
        if (key.toLowerCase().startsWith("alpha")) {
            alphaReleases = [...alphaReleases, item].sort((a, b) =>
                (b.publishedAt || "").localeCompare(a.publishedAt || ""),
            );
            return;
        }

        preAlphaReleases = [...preAlphaReleases, item].sort((a, b) =>
            (b.publishedAt || "").localeCompare(a.publishedAt || ""),
        );
    };

    onMount(async () => {
        try {
            const response = await fetch("/releases.json");
            if (!response.ok) {
                throw new Error("Unable to load releases.");
            }

            const data = (await response.json()) as ReleasesJson;

            const entries = Object.entries(data.releases);

            alphaReleases = [];
            preAlphaReleases = [];

            const fetched = await Promise.all(
                entries.map(async ([key, info]) => {
                    try {
                        const releaseResponse = await fetch(info.url, {
                            headers: {
                                Accept: "application/vnd.github+json",
                                "X-GitHub-Api-Version": "2022-11-28",
                            },
                        });

                        if (!releaseResponse.ok) {
                            throw new Error("Failed to reach GitHub");
                        }

                        const githubRelease = await releaseResponse.json();

                        return {
                            key,
                            ...info,
                            publishedAt: githubRelease.published_at ?? null,
                        } as ReleaseListItem;
                    } catch (fetchError) {
                        console.error(fetchError);
                        return {
                            key,
                            ...info,
                            publishedAt: null,
                        } as ReleaseListItem;
                    }
                }),
            );

            fetched.forEach((item) => {
                categorizeRelease(item.key, item);
            });
        } catch (error) {
            console.error(error);
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while loading releases.";
        } finally {
            loading = false;
        }
    });
</script>

<div>
    <NavBar></NavBar>
    <Introduction
        name="Explore Atlas Releases"
        description="Find every milestone in one place. Browse release notes, follow changelog highlights, and jump directly into downloads."
        imageSrc="/images/render_sample.png"
    ></Introduction>

    <div class="w-full px-6 sm:px-8 text-white">
        <div class="mx-auto flex w-full max-w-[1200px] flex-col gap-10 mb-10">
            {#if loading}
                <div class="flex justify-center py-20 text-gray-300">
                    Loading releases...
                </div>
            {:else if errorMessage}
                <div
                    class="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-red-200"
                >
                    {errorMessage}
                </div>
            {:else}
                <BentoLayout spacing="3rem">
                    <BentoRow>
                        <BentoCard autoHeight reveal={{ x: -80, y: 0 }}>
                            <div class="flex items-center justify-between">
                                <h2
                                    class="font-sans text-3xl font-bold text-white"
                                >
                                    Alpha releases
                                </h2>
                                <span class="text-sm text-gray-400">
                                    {alphaReleases.length} releases
                                </span>
                            </div>

                            <div class="mt-6 divide-y divide-gray-700/60">
                                {#if alphaReleases.length === 0}
                                    <p class="py-4 text-gray-400">
                                        No alpha releases published yet.
                                    </p>
                                {:else}
                                    {#each alphaReleases as release}
                                        <div
                                            class="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <a
                                                class="text-lg font-semibold text-sky-300 hover:text-sky-200"
                                                href={`/releases/${release.key}`}
                                            >
                                                {release.name}
                                            </a>
                                            <span class="text-sm text-gray-400">
                                                {formatDate(
                                                    release.publishedAt,
                                                )}
                                            </span>
                                        </div>
                                    {/each}
                                {/if}
                            </div>
                        </BentoCard>

                        <BentoCard autoHeight reveal={{ x: 80, y: 0 }}>
                            <div class="flex items-center justify-between">
                                <h2
                                    class="font-sans text-3xl font-bold text-white"
                                >
                                    Pre-alpha releases
                                </h2>
                                <span class="text-sm text-gray-400">
                                    {preAlphaReleases.length} releases
                                </span>
                            </div>

                            <div class="mt-6 divide-y divide-gray-700/60">
                                {#if preAlphaReleases.length === 0}
                                    <p class="py-4 text-gray-400">
                                        No pre-alpha releases published yet.
                                    </p>
                                {:else}
                                    {#each preAlphaReleases as release}
                                        <div
                                            class="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <a
                                                class="text-lg font-semibold text-sky-300 hover:text-sky-200"
                                                href={`/releases/${release.key}`}
                                            >
                                                {release.name}
                                            </a>
                                            <span class="text-sm text-gray-400">
                                                {formatDate(
                                                    release.publishedAt,
                                                )}
                                            </span>
                                        </div>
                                    {/each}
                                {/if}
                            </div>
                        </BentoCard>
                    </BentoRow>
                </BentoLayout>
            {/if}
        </div>
    </div>

    <Footer></Footer>
</div>
