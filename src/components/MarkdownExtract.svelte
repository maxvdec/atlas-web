<script lang="ts">
    import { onMount, tick } from "svelte";
    import MarkdownIt from "markdown-it";
    import hljs from "highlight.js/lib/core";
    import cpp from "highlight.js/lib/languages/cpp";
    import bash from "highlight.js/lib/languages/bash";
    import json from "highlight.js/lib/languages/json";
    import javascript from "highlight.js/lib/languages/javascript";
    import typescript from "highlight.js/lib/languages/typescript";
    import toml from "highlight.js/lib/languages/ini";
    import mermaid from "mermaid";
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

    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("c++", cpp);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("sh", bash);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("js", javascript);
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("ts", typescript);
    hljs.registerLanguage("toml", toml);

    let md: MarkdownIt;

    const highlight = (code: string, lang: string) => {
        const language = lang?.toLowerCase();

        if (language === "mermaid") {
            const escaped = md.utils.escapeHtml(code);
            return `<div class="mermaid" data-mermaid>${escaped}</div>`;
        }

        if (language && hljs.getLanguage(language)) {
            try {
                const { value } = hljs.highlight(code, {
                    language,
                    ignoreIllegals: true,
                });

                return `<pre class="hljs language-${language}"><code>${value}</code></pre>`;
            } catch (error) {
                console.error("Highlight failed", error);
            }
        }

        const escaped = md.utils.escapeHtml(code);
        return `<pre class="hljs"><code>${escaped}</code></pre>`;
    };

    md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
        highlight,
    });

    if (typeof window !== "undefined") {
        mermaid.initialize({
            startOnLoad: false,
            securityLevel: "loose",
            theme: "dark",
        });
    }

    let renderedMarkdown = $state<string>("");
    let loading = $state<boolean>(false);
    let errorMessage = $state<string | null>(null);
    let lastFetched = "";
    let markdownContainer = $state<HTMLDivElement | null>(null);
    let diagramCounter = 0;

    const parseMarkdown = (raw: string) => {
        if (!raw.trim()) {
            renderedMarkdown = "";
            return;
        }

        renderedMarkdown = md.render(raw);
        scheduleMermaidRender();
    };

    const renderMermaidDiagrams = async () => {
        if (!markdownContainer || typeof window === "undefined") {
            return;
        }

        const diagrams = Array.from(
            markdownContainer.querySelectorAll<HTMLElement>(".mermaid"),
        );

        await Promise.all(
            diagrams.map(async (diagram) => {
                if (diagram.dataset.mermaid === "processed") {
                    return;
                }

                const code = diagram.textContent?.trim() ?? "";
                if (!code) {
                    return;
                }

                const diagramId = `mermaid-${diagramCounter++}`;

                try {
                    const rendered = await mermaid.render(diagramId, code);
                    diagram.innerHTML = rendered.svg;
                    diagram.dataset.mermaid = "processed";
                } catch (error) {
                    console.error("Failed to render mermaid diagram", error);
                    diagram.dataset.mermaid = "error";
                    diagram.innerHTML = `<div class="mermaid-error">${md.utils.escapeHtml(
                        code,
                    )}</div>`;
                }
            }),
        );
    };

    const scheduleMermaidRender = async () => {
        if (typeof window === "undefined") {
            return;
        }

        await tick();
        await renderMermaidDiagrams();
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

    let disableReveal = true;
</script>

<div class="no-anim">
    <NavBar></NavBar>
    <Introduction name={title} {description} imageSrc={image}></Introduction>

    <div class="w-full px-6 text-white sm:px-8">
        <div class="mx-auto flex w-full max-w-[1200px] flex-col gap-12 mb-10">
            <BentoLayout spacing="3rem">
                <BentoRow>
                    <BentoCard
                        autoHeight
                        reveal={{ x: 0, y: 60 }}
                        disableReveal={true}
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
                            <div
                                class="markdown-body"
                                bind:this={markdownContainer}
                            >
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

    :global(.markdown-body h1) {
        background: rgba(15, 23, 42, 0.85);
        border-radius: 1rem;
        padding: 0;
        overflow-x: auto;
        border: 1px solid rgba(148, 163, 184, 0.2);
        font-family: var(--tw-font-sans, "Inter", sans-serif);
        font-weight: 700;
        color: #ffffff;
        background: transparent;
        padding: 1.25rem;
    }

    :global(.markdown-body h1) {
        font-size: 2.5rem;
    }

    :global(.hljs) {
        background: transparent;
        color: #e2e8f0;
        line-height: 1.6;
    }

    :global(.hljs-keyword),
    :global(.hljs-selector-tag),
    :global(.hljs-subst) {
        color: #60a5fa;
        font-weight: 600;
    }

    :global(.hljs-string),
    :global(.hljs-title),
    :global(.hljs-name),
    :global(.hljs-type),
    :global(.hljs-attribute),
    :global(.hljs-symbol),
    :global(.hljs-bullet) {
        color: #fbbf24;
    }

    :global(.hljs-number),
    :global(.hljs-literal),
    :global(.hljs-tag .hljs-attr) {
        color: #38bdf8;
    }

    :global(.hljs-section),
    :global(.hljs-quote),
    :global(.hljs-selector-id),
    :global(.hljs-template-variable) {
        color: #a5b4fc;
    }

    :global(.hljs-comment) {
        color: #94a3b8;
        font-style: italic;
    }

    :global(.hljs-meta) {
        color: #f472b6;
    }

    :global(.markdown-body h2) {
        font-size: 2rem;
    }

    :global(.markdown-body img) {
        /* Make images behave predictably inside the markdown container
           - ensure they don't overflow or create weird layout/stacking issues
           - display:block avoids inline layout shifts that can collapse parents
        */
        display: block;
        max-width: 100%;
        height: auto;
        border-radius: 1rem;
        margin: 1rem 0;
        box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.8);
        /* keep images on their own stacking layer so they don't hide other content */
        position: relative;
        z-index: 0;
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

    :global(.markdown-body .mermaid) {
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 1rem;
        padding: 1rem;
        min-height: 120px;
        width: 100%;
        box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.8);
    }

    :global(.markdown-body .mermaid svg) {
        width: 100%;
        height: auto;
        display: block;
    }

    :global(.mermaid-error) {
        background: rgba(248, 113, 113, 0.1);
        border: 1px solid rgba(248, 113, 113, 0.3);
        border-radius: 0.75rem;
        padding: 1rem;
        font-family: var(--tw-font-mono, "Fira Code", monospace);
        color: #fee2e2;
    }

    :global(.no-anim),
    :global(.no-anim *) {
        animation: none !important;
        transition: none !important;
        transition-delay: 0s !important;
        opacity: 1 !important;
        will-change: auto !important;
    }
</style>
