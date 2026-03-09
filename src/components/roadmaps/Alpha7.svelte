<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import Roadmap from "./Roadmap.svelte";

    let alpha7Roadmap = {
        title: "Alpha 7 Roadmap",
        coverImage: "/images/sponza.png",
        description:
            "The Alpha 7 release focuses on improving the rendering capabilities of the Atlas Engine by implementing ray tracing support, enhancing the material system, and optimizing performance across various platforms.",
        features: [
            {
                title: "Photon Global Illumination",
                description: `Implement Photon Global Illumination (GI) in the Atlas Engine to enhance the realism of lighting and shadows in 3D scenes, providing more accurate and dynamic lighting effects.`,
                status: "finished",
            },
            {
                title: "Photon Ray Tracing",
                description: `Integrate Photon Ray Tracing into the Atlas Engine to enable real-time ray tracing capabilities, allowing for improved visual fidelity and realistic rendering of reflections, refractions, and shadows.`,
                status: "finished",
            },
            {
                title: "Move to Ninja build system",
                description: `Transition the Atlas Engine's build system to Ninja, a high-performance build system that can significantly reduce build times and improve developer productivity.`,
                status: "finished",
            },
            {
                title: "Solve C++ Errors and Style Issues",
                description: `Address and resolve various issues related to C++ compilation and code style within the Atlas Engine,
                    improving stability and maintainability of the codebase.`,
                status: "finished",
            },
            {
                title: "True multiplatform support",
                description: `Improve the CLI and build system of the Atlas Engine to ensure seamless support for multiple platforms, including Windows, macOS, Linux, allowing developers to easily target a wide range of devices.`,
                status: "pending",
            },
        ],
    };
</script>

<div>
    <NavBar></NavBar>
    <Roadmap roadmap={alpha7Roadmap}></Roadmap>
    <Footer></Footer>
</div>
