<script lang="ts">
    import Footer from "./navigation/Footer.svelte";
    import NavBar from "./navigation/NavBar.svelte";
    import BentoCard from "./ui/bento/BentoCard.svelte";
    import BentoLayout from "./ui/bento/BentoLayout.svelte";
    import BentoRow from "./ui/bento/BentoRow.svelte";
    import Introduction from "./ui/Introduction.svelte";

    const focusAreas = [
        {
            title: "Engine Core & Rendering",
            description:
                "Optimize Opal, extend Vulkan features, and keep our renderer blazing fast across platforms.",
            image: "/images/render_sample.png",
        },
        {
            title: "Hana Shading Language",
            description:
                "Improve the Hana toolchain, author new shader samples, and enhance IDE integrations.",
            image: "/images/sponza2.png",
        },
        {
            title: "Docs & Learning",
            description:
                "Shape guides, tutorials, and references that make Atlas approachable for every developer.",
            image: "/images/repo.png",
        },
    ];

    const contributionSteps = [
        {
            step: "1",
            title: "Discover",
            body: "Browse open issues labeled good-first-issue or roadmap items tagged for contributors.",
        },
        {
            step: "2",
            title: "Discuss",
            body: "Open a discussion or comment on the issue to align on scope and gather context before coding.",
        },
        {
            step: "3",
            title: "Develop",
            body: "Fork the repository, create a feature branch, and follow our formatting, testing, and commit rules.",
        },
        {
            step: "4",
            title: "Deliver",
            body: "Submit a pull request, add notes about testing, and stay available for code review conversations.",
        },
    ];

    const communityChannels = [
        {
            title: "Discord Community",
            description:
                "Join live chats with engine maintainers, find pair-programming partners, and take part in office hours.",
            linkLabel: "Join Discord",
            link: "https://discord.gg/atlasengine",
        },
        {
            title: "GitHub Discussions",
            description:
                "Propose ideas, share prototypes, and request feedback from the broader Atlas community.",
            linkLabel: "Start a thread",
            link: "https://github.com/maxvdec/atlas/discussions",
        },
        {
            title: "Atlas Blog",
            description:
                "Publish deep dives or post-mortems about your contributions so others can learn from your work.",
            linkLabel: "Pitch an article",
            link: "/blog",
        },
    ];
</script>

<div>
    <NavBar></NavBar>
    <Introduction
        name="Contribute to Atlas Engine"
        description="Help us push real-time rendering forward—share your expertise, learn with others, and build the future of Atlas."
        imageSrc="/images/landing.png"
    ></Introduction>

    <div class="flex flex-col gap-20 text-white w-full px-6 sm:px-8">
        <section class="mx-auto w-full max-w-[1200px]">
            <BentoLayout spacing="3rem">
                <BentoRow>
                    <BentoCard autoHeight reveal={{ x: -80, y: 0 }}>
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Why contribute?
                        </h2>
                        <p class="mt-5 text-gray-300 font-sans">
                            Atlas thrives on community-driven engineering. Every
                            pull request sharpens our renderer, expands
                            documentation, and keeps the project accessible to
                            studios and hobbyists alike. Contributing means
                            learning cutting-edge graphics techniques,
                            collaborating with a passionate crew, and shaping an
                            open engine that powers ambitious worlds.
                        </p>
                        <p class="mt-5 text-gray-300 font-sans">
                            Start small with documentation or tooling fixes, or
                            dive into the rendering pipeline—either way your
                            input keeps Atlas healthy, welcoming, and
                            production-ready.
                        </p>
                    </BentoCard>
                    <BentoCard autoHeight reveal={{ x: 80, y: 0 }}>
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Expectations & values
                        </h2>
                        <ul class="mt-5 space-y-3 text-gray-300 font-sans">
                            <li>
                                <span class="font-semibold text-white"
                                    >Respectful collaboration:</span
                                >
                                communicate clearly, assume positive intent, and
                                celebrate shared wins.
                            </li>
                            <li>
                                <span class="font-semibold text-white"
                                    >Sustainable code:</span
                                >
                                prioritize readability, testing, and performance
                                over quick hacks.
                            </li>
                            <li>
                                <span class="font-semibold text-white"
                                    >Inclusive onboarding:</span
                                >
                                document your learnings and mentor newcomers where
                                you can.
                            </li>
                        </ul>
                        <p class="mt-5 text-gray-300 font-sans">
                            These principles keep Atlas a healthy environment
                            for long-term innovation.
                        </p>
                    </BentoCard>
                </BentoRow>

                <BentoRow>
                    {#each focusAreas as area}
                        <BentoCard autoHeight reveal={{ x: 0, y: 64 }}>
                            <h3 class="font-sans text-2xl font-bold text-white">
                                {area.title}
                            </h3>
                            <p class="mt-4 text-gray-300 font-sans">
                                {area.description}
                            </p>
                            <div
                                class="relative mt-6 overflow-hidden rounded-3xl h-52"
                            >
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                                <div
                                    class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-gray-950/95 to-transparent"
                                ></div>
                            </div>
                        </BentoCard>
                    {/each}
                </BentoRow>

                <BentoRow>
                    <BentoCard autoHeight reveal={{ x: -60, y: 0 }}>
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Contribution workflow
                        </h2>
                        <div class="mt-6 grid gap-4 md:grid-cols-2">
                            {#each contributionSteps as step}
                                <div
                                    class="rounded-3xl border border-gray-700 bg-gray-800/60 p-5"
                                >
                                    <p
                                        class="font-sans text-sm uppercase tracking-widest text-sky-400"
                                    >
                                        Step {step.step}
                                    </p>
                                    <p
                                        class="mt-2 font-sans text-xl font-semibold text-white"
                                    >
                                        {step.title}
                                    </p>
                                    <p class="mt-2 font-sans text-gray-300">
                                        {step.body}
                                    </p>
                                </div>
                            {/each}
                        </div>
                    </BentoCard>
                    <BentoCard autoHeight reveal={{ x: 60, y: 0 }}>
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Quality checklist
                        </h2>
                        <ul class="mt-5 space-y-3 text-gray-300 font-sans">
                            <li>
                                ✅ Run the relevant engine samples or unit tests
                                before submitting.
                            </li>
                            <li>
                                ✅ Document new APIs, configuration flags, or
                                shader parameters.
                            </li>
                            <li>
                                ✅ Include screenshots or recordings when work
                                affects visuals or UI.
                            </li>
                            <li>
                                ✅ Keep commits scoped and reference the issue
                                or roadmap item.
                            </li>
                            <li>
                                ✅ Tag reviewers based on the subsystem touched
                                (rendering, physics, tooling, docs).
                            </li>
                        </ul>
                        <p class="mt-5 text-gray-300 font-sans">
                            Following these steps streamlines reviews and keeps
                            our release cadence predictable.
                        </p>
                    </BentoCard>
                </BentoRow>
            </BentoLayout>
        </section>

        <section class="mx-auto w-full max-w-[1200px]">
            <div
                class="rounded-4xl border border-gray-700 bg-gray-900/70 px-8 py-10 shadow-xl"
            >
                <div
                    class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
                >
                    <div class="max-w-xl">
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Stay connected
                        </h2>
                        <p class="mt-4 font-sans text-gray-300">
                            Collaboration does not stop at pull requests. Join
                            the conversation, ask questions, and share progress
                            so we can support each other in real time.
                        </p>
                    </div>
                    <div class="grid w-full gap-4 sm:grid-cols-2 lg:w-auto">
                        {#each communityChannels as channel}
                            <div
                                class="rounded-3xl border border-gray-700 bg-gray-800/60 p-5"
                            >
                                <p
                                    class="font-sans text-xl font-semibold text-white"
                                >
                                    {channel.title}
                                </p>
                                <p class="mt-2 font-sans text-gray-300">
                                    {channel.description}
                                </p>
                                <a
                                    class="mt-3 inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300"
                                    href={channel.link}
                                >
                                    {channel.linkLabel} →
                                </a>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-auto w-full max-w-[1200px]">
            <div
                class="relative overflow-hidden rounded-4xl border border-cyan-500/40 bg-linear-to-r from-sky-500/10 via-blue-500/10 to-purple-500/10 px-10 py-12"
            >
                <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%)]"
                ></div>
                <div
                    class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                >
                    <div class="max-w-xl">
                        <h2 class="font-sans text-3xl font-bold text-white">
                            Ready to ship your first contribution?
                        </h2>
                        <p class="mt-4 font-sans text-gray-200">
                            Pick an issue, sync with the team, and open a draft
                            PR. We will guide you through testing and release so
                            your work reaches Atlas users quickly.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <button
                            class="relative rounded-2xl border border-blue-500 bg-blue-600 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-blue-700"
                            onclick={() =>
                                (window.location.href =
                                    "https://github.com/maxvdec/atlas/issues")}
                        >
                            View open issues
                        </button>
                        <button
                            class="relative rounded-2xl border border-gray-500 bg-gray-700 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-gray-600"
                            onclick={() =>
                                (window.location.href =
                                    "mailto:team@atlasengine.dev")}
                        >
                            Email the maintainers
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <Footer></Footer>
</div>
