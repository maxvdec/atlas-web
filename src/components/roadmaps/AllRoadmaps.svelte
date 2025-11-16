<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import Introduction from "../ui/Introduction.svelte";

    import type { RoadmapSummary } from "../../scripts/roadmap";
    import BentoLayout from "../ui/bento/BentoLayout.svelte";
    import BentoRow from "../ui/bento/BentoRow.svelte";
    import BentoCard from "../ui/bento/BentoCard.svelte";

    let roadmaps: RoadmapSummary[] = [
        {
            title: "Alpha 5 Roadmap",
            roadmapURL: "/roadmap/alpha5",
            description:
                "Explore the Alpha 5 roadmap, focusing on enhancing rendering speed with Opal, integrating Jolt Physics, launching a new website, modernizing documentation and integrating the Slang shader language",
        },
    ];
</script>

<div>
    <NavBar></NavBar>

    <Introduction
        name="Roadmaps"
        imageSrc="/images/sponza4.png"
        description="Explore the future plans and upcoming features of the Atlas Engine through our detailed roadmaps."
    ></Introduction>

    <div class="w-full flex justify-center my-10 px-4">
        <BentoLayout className="atlas-container max-w-[720px]">
            {#each roadmaps as roadmap}
                <BentoRow>
                    <BentoCard autoHeight={true}>
                        <div class="flex flex-col gap-3 text-white">
                            <a
                                class="text-2xl font-bold"
                                href={roadmap.roadmapURL}
                            >
                                {roadmap.title}
                            </a>
                            <p class="text-gray-200 leading-relaxed">
                                {roadmap.description}
                            </p>
                        </div>
                    </BentoCard>
                </BentoRow>
            {/each}
        </BentoLayout>
    </div>

    <Footer></Footer>
</div>
