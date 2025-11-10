<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import Roadmap from "./Roadmap.svelte";

    let alpha5Roadmap = {
        title: "Alpha 5 Roadmap",
        coverImage: "/images/sponza3.png",
        description:
            "The Alpha 5 release focuses on enhancing rendering speed by introducing Opal, our in-house rendering backend that uses Vulkan instead of OpenGL. We are also investing in Jolt Physics, the website, documentation, and Hana's implementation for additional backends.",
        features: [
            {
                title: "Create Opal for Core Rendering",
                description: `Introducing Opal, our in-house rendering backend that uses Vulkan API as well as OpenGL,
                    providing better performance and modern rendering techniques.`,
                status: "planned",
            },
            {
                title: "Migrate Atlas to Opal",
                description: `Transition the core rendering engine of Atlas from OpenGL to Opal,
                    ensuring compatibility and performance improvements.`,
                status: "planned",
            },
            {
                title: "Integrate the Jolt Physics Engine",
                description: `Incorporate Jolt Physics into Atlas to provide advanced physics simulation capabilities,
                    enhancing the realism of physical interactions within the engine.`,
                status: "planned",
            },
            {
                title: "New Website Launch",
                description: `Create and launch a new website for Atlas Engine,
                    providing better access to resources, documentation, and community engagement.`,
                status: "planned",
            },
            {
                title: "Modernize Documentation",
                description: `Revamp the existing documentation to improve clarity, organization, and accessibility,
                    making it easier for developers to learn and use Atlas Engine.`,
                status: "planned",
            },
            {
                title: "Add examples and tutorials for the Engine",
                description: `Develop comprehensive examples and tutorials to help users understand and utilize the 
                features of Atlas Engine effectively.`,
                status: "planned",
            },
            {
                title: "Create the Hana Shader Language",
                description: `Develop Hana, a custom shader language designed to simplify shader creation and
                    enhance performance within Atlas Engine.`,
                status: "planned",
            },
            {
                title: "Implement a Syntax Highlighting Plugin for Hana",
                description: `Create a syntax highlighting plugin for popular code editors to support the Hana shader language,
                    improving the development experience for shader programmers.`,
                status: "planned",
            },
            {
                title: "Move all shaders to Hana",
                description: `Transition all existing shaders in Atlas Engine to the Hana shader language,
                    ensuring consistency and leveraging the benefits of the new language.`,
                status: "planned",
            },
        ],
    };
</script>

<div>
    <NavBar></NavBar>
    <Roadmap roadmap={alpha5Roadmap}></Roadmap>
    <Footer></Footer>
</div>
