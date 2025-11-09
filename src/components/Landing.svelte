<script lang="ts">
    import NavBar from "./navigation/NavBar.svelte";
    import BentoLayout from "./ui/bento/BentoLayout.svelte";
    import BentoRow from "./ui/bento/BentoRow.svelte";
    import BentoCard from "./ui/bento/BentoCard.svelte";
    import BlogAnnounce from "./ui/cards/BlogAnnounce.svelte";
    import Footer from "./navigation/Footer.svelte";

    let randomNumbers100 = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 100),
    );

    let blogPosts = [
        {
            title: "Introducing Atlas 1.0",
            description:
                "We are excited to announce the release of Atlas 1.0, the first stable version of our game engine.",
            imageUrl: "/images/render_sample.png",
            link: "/blog/introducing-atlas-1-0",
        },
        {
            title: "Getting Started with Atlas",
            description:
                "Learn how to set up your development environment and create your first project with Atlas.",
            imageUrl: "/images/blog/getting_started.png",
            link: "/blog/getting-started-with-atlas",
        },
        {
            title: "Modular Architecture in Atlas",
            description:
                "Discover how Atlas's modular architecture allows for flexibility and customization in game development.",
            imageUrl: "/images/blog/modular_architecture.png",
            link: "/blog/modular-architecture-in-atlas",
        },
    ];
</script>

<div>
    <NavBar></NavBar>
    <div class="mt-16 text-white">
        <div
            class="text-6xl font-sans font-bold flex justify-center items-center h-150 flex-row"
        >
            <div class="mt-16">
                Build everything,<br />
                and beyond.

                <div
                    class="mt-6 text-lg font-sans font-normal text-gray-400 w-96"
                >
                    Atlas is a powerful, flexible and easy-to-use Game Engine
                    for developing amazing games, build worlds and interactive
                    experiences, open to everyone.

                    <div class="flex flex-row space-x-4 mt-6">
                        <div class="relative group mt-5">
                            <div
                                class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-auroraw w-30"
                            ></div>
                            <button
                                class="relative bg-blue-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-blue-700 transition border border-blue-500 shadow-lg hover:cursor-pointer"
                                onclick={() =>
                                    (window.location.href = "/download")}
                                >Download</button
                            >
                        </div>
                        <div class="relative group mt-5">
                            <div
                                class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-auroraw w-52"
                            ></div>
                            <button
                                class="relative bg-gray-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-gray-700 transition border border-gray-500 shadow-lg hover:cursor-pointer"
                                onclick={() =>
                                    (window.location.href =
                                        "https://github.com/maxvdec/atlas")}
                                >Check the repository</button
                            >
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/images/landing.png"
                alt="Landing"
                class="h-110 w-110 -mt-10 mr-10"
            />
        </div>
        <div class="flex justify-center">
            <div
                class="
		w-[1200px]
		"
            >
                <BentoLayout>
                    <BentoRow>
                        <BentoCard offset={600} reveal={{ x: -100, y: 0 }}>
                            <h1 class="font-sans text-2xl font-bold">
                                Create Worlds
                            </h1>
                            <p class="pt-5 text-gray-300">
                                Worlds are meant to be defined by their unique
                                characteristics and rules. With Atlas, you shape
                                your own reality. From groundbreaking
                                performance to incredible visuals, all designed
                                to fit in your vision.
                            </p>
                            <div
                                class="relative mt-2 overflow-hidden rounded-3xl h-full"
                            >
                                <img
                                    src="/images/atlas_ball.png"
                                    alt="Code Example"
                                    class="w-full mt-15 h-auto block object-cover select-none"
                                />
                                <div
                                    class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-gray-900 to-transparent pointer-events-none"
                                ></div>
                            </div>
                        </BentoCard>
                        <BentoCard reveal={{ x: 100, y: 0 }}
                            ><h1 class="font-sans text-2xl font-bold">
                                Built Modular
                            </h1>
                            <p class="pt-5 text-gray-300">
                                Atlas is built with modularity in mind. It ships
                                with in-house libraries that can be extended or
                                replaced to fit your needs. Whether you're
                                building a small game or a massive online world,
                                Atlas scales with you.
                            </p>
                            <div
                                class="relative mt-2 overflow-hidden rounded-3xl h-full"
                            >
                                <img
                                    src="/images/vscode_modules.png"
                                    alt="Code Example"
                                    class="w-100 h-auto block object-cover select-none"
                                />
                                <div
                                    class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-gray-900 to-transparent pointer-events-none"
                                ></div>
                            </div></BentoCard
                        >
                    </BentoRow>
                    <BentoRow>
                        <BentoCard offset={-600} reveal={{ x: -100, y: 0 }}
                            ><h1 class="font-sans text-2xl font-bold">
                                Open Source
                            </h1>
                            <p class="pt-5 text-gray-300">
                                Atlas is open source and available for anyone to
                                use and modify. We believe in the power of
                                community-driven development and encourage
                                contributions from developers of all
                                backgrounds.
                            </p>
                            <div
                                class="flex items-center w-full justify-center"
                            >
                                <img
                                    src="/images/open_source.svg"
                                    alt="Open Source"
                                    class="w-40 h-40 mt-4"
                                />
                            </div>
                        </BentoCard>
                        <BentoCard reveal={{ x: 100, y: 0 }}>
                            <h1 class="font-sans text-2xl font-bold">
                                Design and Code
                            </h1>

                            <p class="pt-5 text-gray-300">
                                With the C++ API, you have full control over the
                                design and implementation of your game, making
                                it infinitely fast and customizable.
                            </p>

                            <div
                                class="relative -mt-12 overflow-hidden rounded-3xl h-full"
                            >
                                <img
                                    src="/images/code_example.png"
                                    alt="Code Example"
                                    class="w-full h-auto block object-cover select-none"
                                />
                                <div
                                    class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-gray-900 to-transparent pointer-events-none"
                                ></div>
                            </div>
                        </BentoCard>
                    </BentoRow>
                </BentoLayout>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="h-150 text-white w-[1200px] flex mt-10 ml-10 flex-col">
                <p class="font-sans font-bold text-3xl">News</p>
                <div class="flex flex-row mt-10 space-x-6 overflow-x-auto">
                    {#each blogPosts as post}
                        <BlogAnnounce blogPostRaw={post} />
                    {/each}
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <hr class="-mt-20 w-[1200px] border-gray-500" />
        </div>
        <div class="flex justify-center">
            <div class="h-150 text-white w-[1200px] flex ml-10 flex-col -mt-10">
                <p class="font-sans font-bold text-3xl mb-10">Install Atlas</p>
                <BentoLayout>
                    <div class="aurora-container">
                        <div class="aurora-backdrop"></div>
                        <div class="aurora-content">
                            <BentoRow>
                                <BentoCard
                                    class="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-4xl h-50 p-4"
                                >
                                    <p class="font-bold font-sans text-2xl">
                                        Download the installer.
                                    </p>
                                    <p class="text-gray-200 mt-2">
                                        Download the installer from our website
                                        and execute it to begin the installation
                                        process.
                                    </p>
                                    <div class="relative group mt-8">
                                        <div
                                            class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-auroraw w-30"
                                        ></div>
                                        <button
                                            class="relative bg-blue-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-blue-700 transition border border-blue-500 shadow-lg hover:cursor-pointer"
                                            onclick={() =>
                                                (window.location.href =
                                                    "/download")}
                                            >Download</button
                                        >
                                    </div>
                                </BentoCard>
                                <BentoCard
                                    class="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-4xl h-50 p-4"
                                    ><p class="font-bold font-sans text-2xl">
                                        Create a project.
                                    </p>
                                    <p class="text-gray-200 mt-2">
                                        Use the command line tool to setup a new
                                        project.
                                    </p>
                                    <img
                                        src="/images/create_example.png"
                                        alt="Create Example"
                                        class="-mt-6 h-auto w-full"
                                    />
                                </BentoCard>
                                <BentoCard
                                    class="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-4xl h-50 p-4"
                                >
                                    <p class="font-bold font-sans text-2xl">
                                        Check out the tutorials.
                                    </p>
                                    <p class="text-gray-200 mt-2">
                                        Explore our comprehensive tutorials to
                                        get started with Atlas and learn how to
                                        make the most of its features.
                                    </p>
                                    <div class="relative group mt-3">
                                        <div
                                            class="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-auroraw w-30"
                                        ></div>
                                        <button
                                            class="relative bg-gray-600 text-white font-sans px-4 py-1 rounded-2xl hover:bg-gray-500 transition border border-gray-500 shadow-lg hover:cursor-pointer"
                                            onclick={() =>
                                                (window.location.href =
                                                    "/learn/first-project")}
                                            >Go to the tutorials</button
                                        >
                                    </div></BentoCard
                                >
                            </BentoRow>
                        </div>
                    </div>
                </BentoLayout>
            </div>
        </div>
        <Footer></Footer>
    </div>
</div>

<style>
    @keyframes aurora {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .aurora-container {
        position: relative;
        isolation: isolate;
        margin-top: 1.5rem;
    }

    .aurora-backdrop {
        position: absolute;
        inset: -4rem -2rem;
        background: linear-gradient(
            120deg,
            #ff6b6b,
            #ffde59,
            #4de98a,
            #4db7ff,
            #7b4dff,
            #ff6b6b
        );
        background-size: 400% 400%;
        filter: blur(80px);
        opacity: 0.75;
        animation: auroraGradient 20s ease infinite;
        pointer-events: none;
        border-radius: 3rem;
        z-index: 0;
    }

    .aurora-content {
        position: relative;
        z-index: 1;
    }

    @keyframes auroraGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
