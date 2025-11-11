<script lang="ts">
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";
    import Introduction from "./ui/Introduction.svelte";
    import BentoLayout from "./ui/bento/BentoLayout.svelte";
    import BentoRow from "./ui/bento/BentoRow.svelte";
    import BentoCard from "./ui/bento/BentoCard.svelte";
    import NavBar from "./navigation/NavBar.svelte";
    import Footer from "./navigation/Footer.svelte";

    let {
        title,
        description = "",
        image,
        markdownURL = "",
        markdown = "",
    } = $props<{
        title: string;
        description?: string;
        image: string;
        markdownURL?: string;
        markdown?: string;
    }>();

    const md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
    });

    let renderedMarkdown = $state<string>("");
    let loading = $state<boolean>(false);
    let errorMessage = $state<string | null>(null);
    let lastFetched = "";

    const parseMarkdown = (raw: string) => {
        if (!raw.trim()) {
            renderedMarkdown = "";
            return;
        }

        renderedMarkdown = md.render(raw);
    };

    const fetchMarkdown = async (url: string) => {
        if (!url || lastFetched === url) {
            return;
        }

        loading = true;
        errorMessage = null;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to load markdown content.");
            }

            const text = await response.text();
            lastFetched = url;
            parseMarkdown(text);
        } catch (error) {
            console.error(error);
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while rendering the article.";
        } finally {
            loading = false;
        }
    };

    if (markdown && markdown.trim()) {
        parseMarkdown(markdown);
    }

    onMount(() => {
        if (!renderedMarkdown && markdownURL) {
            fetchMarkdown(markdownURL);
        }
    });

    $effect(() => {
        if (markdown && markdown.trim()) {
            parseMarkdown(markdown);
        } else if (markdownURL) {
            fetchMarkdown(markdownURL);
        }
    });
</script>

<div>
    <NavBar></NavBar>
    <Introduction name={title} {description} imageSrc={image}></Introduction>

    <div class="w-full px-6 text-white sm:px-8">
        <div class="mx-auto flex w-full max-w-[1200px] flex-col gap-12 mb-10">
            <BentoLayout spacing="3rem">
                <BentoRow>
                    <BentoCard
                        autoHeight
                        reveal={{ x: 0, y: 60 }}
                        class="pb-10"
                    >
                        {#if loading}
                            <div class="py-10 text-center text-gray-300">
                                Loading article…
                            </div>
                        {:else if errorMessage}
                            <div
                                class="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 text-rose-200"
                            >
                                {errorMessage}
                            </div>
                        {:else if renderedMarkdown}
                            <div class="markdown-body">
                                {@html renderedMarkdown}
                            </div>
                        {:else}
                            <div class="py-10 text-center text-gray-400">
                                No content available yet. Provide markdown or a
                                markdownURL to display the article.
                            </div>
                        {/if}
                    </BentoCard>
                </BentoRow>
            </BentoLayout>
        </div>
    </div>
    <Footer></Footer>
</div>

<style>
    :global(.markdown-body) {
        font-family: var(--tw-font-sans, "Inter", sans-serif);
        color: #d1d5db;
        line-height: 1.8;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    :global(.markdown-body h1),
    :global(.markdown-body h2),
    :global(.markdown-body h3),
    :global(.markdown-body h4),
    :global(.markdown-body h5),
    :global(.markdown-body h6) {
        font-family: var(--tw-font-sans, "Inter", sans-serif);
        font-weight: 700;
        color: #ffffff;
        /* margin-top: 1.75rem; */
        line-height: 1.2;
    }

    :global(.markdown-body h1) {
        font-size: 2.5rem;
    }

    :global(.markdown-body h2) {
        font-size: 2rem;
    }

    :global(.markdown-body h3) {
        font-size: 1.5rem;
    }

    :global(.markdown-body p) {
        margin: 0;
    }

    :global(.markdown-body a) {
        color: #38bdf8;
        text-decoration: underline;
        text-decoration-color: rgba(56, 189, 248, 0.4);
    }

    :global(.markdown-body strong) {
        color: #f8fafc;
        font-weight: 700;
    }

    :global(.markdown-body em) {
        color: #e2e8f0;
    }

    :global(.markdown-body ul),
    :global(.markdown-body ol) {
        padding-left: 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    :global(.markdown-body ul) {
        list-style: disc;
    }

    :global(.markdown-body ol) {
        list-style: decimal;
    }

    :global(.markdown-body blockquote) {
        border-left: 4px solid rgba(96, 165, 250, 0.35);
        padding-left: 1rem;
        color: #cbd5f5;
        background: rgba(37, 99, 235, 0.08);
        border-radius: 0.75rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }

    :global(.markdown-body code) {
        background: rgba(148, 163, 184, 0.15);
        border-radius: 0.5rem;
        padding: 0.2rem 0.45rem;
        font-family: var(--tw-font-mono, "Fira Code", monospace);
        font-size: 0.95em;
        color: #e0e7ff;
    }

    :global(.markdown-body pre) {
        background: rgba(15, 23, 42, 0.85);
        border-radius: 1rem;
        padding: 1.25rem;
        overflow-x: auto;
        border: 1px solid rgba(148, 163, 184, 0.2);
    }

    :global(.markdown-body pre code) {
        background: transparent;
        padding: 0;
        font-size: 0.95rem;
        color: #f8fafc;
    }

    :global(.markdown-body table) {
        width: 100%;
        border-collapse: collapse;
        border-radius: 1rem;
        overflow: hidden;
    }

    :global(.markdown-body th),
    :global(.markdown-body td) {
        border: 1px solid rgba(100, 116, 139, 0.3);
        padding: 0.75rem 1rem;
        text-align: left;
    }

    :global(.markdown-body th) {
        background: rgba(59, 130, 246, 0.15);
        color: #f8fafc;
    }

    :global(.markdown-body hr) {
        border: none;
        border-top: 1px solid rgba(148, 163, 184, 0.25);
        margin: 2rem 0;
    }
</style>
