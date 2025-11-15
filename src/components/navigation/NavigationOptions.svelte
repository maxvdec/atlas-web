<script lang="ts">
    let { rawOptions = {} } = $props();
    import type { NavigationOption } from "../../scripts/utils";
    import { blur } from "svelte/transition";
    let options = rawOptions as NavigationOption;
</script>

<div
    class="absolute top-full left-0 pt-3 z-50"
    transition:blur={{ duration: 200 }}
>
    <div
        class="min-w-[480px] border border-white/10 rounded-2xl shadow-2xl px-6 py-5"
        style="background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(22px) saturate(120%); -webkit-backdrop-filter: blur(22px) saturate(120%);"
    >
        <div class="grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {#each options?.groups ?? [] as group, index}
                <div class="relative">
                    <p
                        class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
                    >
                        {group.groupTitle}
                    </p>
                    <ul class="mt-4 space-y-3">
                        {#each group.pages ?? [] as page}
                            <li>
                                <a
                                    href={page.link}
                                    class="group block rounded-xl px-3 py-2 transition duration-200 hover:bg-gray-800/60 focus-visible:bg-gray-800/60 focus-visible:outline-none"
                                >
                                    <p
                                        class="text-sm font-semibold text-gray-100 group-hover:text-white"
                                    >
                                        {page.title}
                                    </p>
                                    {#if page.description}
                                        <p
                                            class="mt-1 text-xs text-gray-400 group-hover:text-gray-300"
                                        >
                                            {page.description}
                                        </p>
                                    {/if}
                                </a>
                            </li>
                        {/each}
                    </ul>
                    {#if index < (options?.groups?.length ?? 0) - 1}
                        <div
                            class="absolute top-0 -right-6 h-full w-px bg-gray-700 sm:block hidden"
                        ></div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
