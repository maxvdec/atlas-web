<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import Roadmap from "./Roadmap.svelte";

    let alpha6Roadmap = {
        title: "Alpha 6 Roadmap",
        coverImage: "/images/sponza.png",
        description:
            "The Alpha 6 release focuses on creating Atlas Tracer our own debug application for macOS and integrating Jolt into the engine as well as solving some Vulkan related issues.",
        features: [
            {
                title: "Create the Atlas Tracer app",
                description: `Develop Atlas Tracer, a debug application for macOS that allows developers to test and debug rendering features of the Atlas Engine.`,
                status: "finished",
            },
            {
                title: "Make Atlas interact with Atlas Tracer",
                description: `Implement functionality in the Atlas Engine to interact seamlessly with the Atlas Tracer application, enabling efficient debugging and testing workflows.`,
                status: "finished",
            },
            {
                title: "Integrate Jolt Physics into Atlas Engine",
                description: `Incorporate Jolt Physics, a high-performance physics engine, into the Atlas Engine to enhance physics simulation capabilities.`,
                status: "finished",
            },
            {
                title: "Solve Vulkan related issues",
                description: `Address and resolve various issues related to Vulkan API usage within the Atlas Engine,
                    improving stability and performance on supported platforms.`,
                status: "finished",
            },
            {
                title: "Add Metal support for Atlas Engine",
                description: `Implement support for Apple's Metal graphics API in the Atlas Engine, allowing it to run efficiently on macOS devices.`,
                status: "finished",
            },
        ],
    };
</script>

<div>
    <NavBar></NavBar>
    <Roadmap roadmap={alpha6Roadmap}></Roadmap>
    <Footer></Footer>
</div>
