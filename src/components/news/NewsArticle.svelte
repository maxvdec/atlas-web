<script lang="ts">
    import { onMount } from "svelte";
    import MarkdownExtract from "../MarkdownExtract.svelte";
    import type { BlogPostRaw } from "../../scripts/blog";
    import {
        NEWS_JSON_ENDPOINT,
        mapBlogPostRawToNewsItem,
        type NewsItem,
    } from "../../scripts/news";

    let { slug, article: initialArticle = null } = $props<{
        slug: string;
        article?: NewsItem | null;
    }>();

    let article = $state<NewsItem | null>(initialArticle);
    let loading = $state(!initialArticle);
    let errorMessage = $state<string | null>(null);

    const loadArticle = async () => {
        if (article) {
            loading = false;
            return;
        }

        loading = true;
        errorMessage = null;

        try {
            const response = await fetch(NEWS_JSON_ENDPOINT);
            if (!response.ok) {
                throw new Error("Unable to load news feed");
            }

            const rawItems = (await response.json()) as BlogPostRaw[];
            const mappedItems = rawItems.map(mapBlogPostRawToNewsItem);
            const match = mappedItems.find((item) => item.slug === slug);

            if (!match) {
                throw new Error("News article not found");
            }

            article = match;
        } catch (error) {
            console.error("Unable to load article", error);
            errorMessage = "We couldn't find that news article.";
        } finally {
            loading = false;
        }
    };

    onMount(() => {
        if (!article) {
            loadArticle();
        }
    });
</script>

{#if loading}
    <div
        class="flex min-h-screen items-center justify-center bg-gray-950 text-gray-400"
    >
        Loading article...
    </div>
{:else if errorMessage}
    <div
        class="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-center text-red-400"
    >
        {errorMessage}
    </div>
{:else if article}
    <MarkdownExtract
        title={article.title}
        description={article.description}
        image={article.imageUrl ?? "/logo/logo.png"}
        markdownURL={article.markdown}
    />
{/if}
