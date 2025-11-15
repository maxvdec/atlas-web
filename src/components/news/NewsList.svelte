<script lang="ts">
    import { onMount } from "svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import Footer from "../navigation/Footer.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import type { BlogPostRaw } from "../../scripts/blog";
    import {
        NEWS_JSON_ENDPOINT,
        mapBlogPostRawToNewsItem,
        sortNewsByDateDesc,
        type NewsItem,
    } from "../../scripts/news";

    let newsItems: NewsItem[] = [];
    let loading = true;
    let errorMessage: string | null = null;

    const loadNews = async () => {
        loading = true;
        errorMessage = null;

        try {
            const response = await fetch(NEWS_JSON_ENDPOINT);
            if (!response.ok) {
                throw new Error("Unable to load news feed.");
            }

            const rawItems = (await response.json()) as BlogPostRaw[];
            const mapped = rawItems.map(mapBlogPostRawToNewsItem);
            newsItems = sortNewsByDateDesc(mapped);
        } catch (error) {
            console.error("Unable to load news", error);
            errorMessage = "We couldn't load the news feed. Please try again.";
        } finally {
            loading = false;
        }
    };

    onMount(loadNews);
</script>

<div class="min-h-screen bg-gray-950 text-white">
    <NavBar></NavBar>
    <main class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20">
        <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.3em] text-blue-400">
                Atlas Updates
            </p>
            <h1 class="font-sans text-4xl font-bold">Newsroom</h1>
            <p class="text-gray-400">
                Stay current with release spotlights, community highlights, and
                progress updates straight from the Atlas team.
            </p>
        </div>

        {#if loading}
            <p class="text-gray-400">Loading news...</p>
        {:else if errorMessage}
            <p class="text-red-400">{errorMessage}</p>
        {:else if newsItems.length === 0}
            <p class="text-gray-400">No news has been published yet.</p>
        {:else}
            <div
                class="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3"
            >
                {#each newsItems as news}
                    <BlogAnnounce blogPostRaw={news} />
                {/each}
            </div>
        {/if}
    </main>
    <Footer></Footer>
</div>
