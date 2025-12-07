<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import Roadmap from "./Roadmap.svelte";

    let alpha5Roadmap = {
        title: "Alpha 5 Roadmap",
        coverImage: "/images/sponza3.png",
        description:
            "The Alpha 5 release focuses on enhancing rendering speed by introducing Opal, our in-house rendering backend that uses Vulkan instead of OpenGL. We are also investing in Jolt Physics, the website, documentation, and the Slang shader language integration.",
        features: [
            {
                title: "Create Opal for Core Rendering",
                description: `Introducing Opal, our in-house rendering backend that uses Vulkan API as well as OpenGL,
                    providing better performance and modern rendering techniques.`,
                status: "finished",
            },
            {
                title: "Migrate Atlas to Opal",
                description: `Transition the core rendering engine of Atlas from OpenGL to Opal,
                    ensuring compatibility and performance improvements.`,
                status: "finished",
            },
            {
                title: "Add Vulkan support to Opal",
                description: `Implement Vulkan support in the Opal rendering backend,
                    enabling advanced graphics features and improved performance on supported hardware.`,
                status: "finished",
            },
            {
                title: "New Website Launch",
                description: `Create and launch a new website for Atlas Engine,
                    providing better access to resources, documentation, and community engagement.`,
                status: "finished",
            },
            {
                title: "Modernize Documentation",
                description: `Revamp the existing documentation to improve clarity, organization, and accessibility,
                    making it easier for developers to learn and use Atlas Engine.`,
                status: "finished",
            },
            {
                title: "Add examples and tutorials for the Engine",
                description: `Develop comprehensive examples and tutorials to help users understand and utilize the 
                features of Atlas Engine effectively.`,
                status: "finished",
            },
        ],
    };
</script>

<div>
    <NavBar></NavBar>
    <Roadmap roadmap={alpha5Roadmap}></Roadmap>
    <Footer></Footer>
</div>
