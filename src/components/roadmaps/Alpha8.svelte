<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import BlogAnnounce from "../ui/cards/BlogAnnounce.svelte";
    import Roadmap from "./Roadmap.svelte";

    let alpha8Roadmap = {
        title: "Alpha 8 Roadmap",
        coverImage: "/images/cornell.png",
        description:
            "The Alpha 8 release primarily focuses on enhancing the user experience and expanding the capabilities of the Atlas Engine by implementing controller support, integrating Graphite UI for modern UI creation, and addressing issues with the Command Line Interface (CLI) to improve functionality and usability for developers.",
        features: [
            {
                title: "Controller Support",
                description: `Implement Controller Support in the Atlas Engine to enable seamless integration with various gaming controllers, providing a more immersive and intuitive user experience.`,
                status: "finished",
            },
            {
                title: "Graphite UI",
                description: `Integrate Graphite UI into the Atlas Engine to provide a modern and intuitive way to create UIs for your games.`,
                status: "finished",
            },
            {
                title: "Fix the CLI",
                description: `Address and resolve various issues related to the Command Line Interface (CLI) of the Atlas Engine, improving its functionality, usability, and overall user experience for developers.`,
                status: "finished",
            },
        ]
    };
</script>

<div>
    <NavBar></NavBar>
    <Roadmap roadmap={alpha8Roadmap}></Roadmap>
    <Footer></Footer>
</div>
