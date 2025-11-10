<script lang="ts">
    import type { Roadmap } from "../../scripts/roadmap";
    import Introduction from "../ui/Introduction.svelte";
    import { ChevronLeft, ChevronRight, CircleCheck } from "@lucide/svelte";
    import { CircleDashed } from "@lucide/svelte";

    let { roadmap: roadmapRaw } = $props();
    let roadmap = roadmapRaw as Roadmap;
</script>

<div>
    <Introduction
        name={roadmap.title}
        imageSrc={roadmap.coverImage}
        description={roadmap.description}
    ></Introduction>

    <div class="mt-10 flex items-center flex-col text-white gap-4 mb-10">
        {#each roadmap.features as feature}
            <div
                class="bg-gray-800 p-5 rounded-2xl border-gray-600 border w-[800px] flex flex-col"
            >
                <div class="flex flex-row gap-2">
                    <p class="font-bold">{feature.title}</p>
                    {#if feature.status === "finished"}
                        <CircleCheck class="w-5 h-5 text-green-500"
                        ></CircleCheck>
                    {:else}
                        <CircleDashed class="w-5 h-5 text-yellow-500"
                        ></CircleDashed>
                    {/if}
                </div>
                <p class="mt-2">{feature.description}</p>
                {#if feature.blogURL !== undefined}
                    <a
                        href={feature.blogURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-400 mt-5 font-bold inline-flex items-center gap-2"
                    >
                        <span>Read more</span>
                        <ChevronRight
                            class="w-4 h-4 text-blue-400 align-middle"
                            strokeWidth="2"
                        />
                    </a>
                {/if}
            </div>
        {/each}
    </div>

    <div class="w-full flex justify-center mb-10 flex-col items-center">
        <p class="font-bold text-white text-2xl">
            Checking for roadmaps of old versions?
        </p>
        <div class="relative group mt-5">
            <div
                class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-auroraw w-30"
            ></div>
            <button
                class="relative bg-blue-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-blue-700 transition border border-blue-500 shadow-lg hover:cursor-pointer"
                onclick={() => (window.location.href = "/roadmap/all")}
                >Head here</button
            >
        </div>
    </div>
</div>
