<script lang="ts">
    import Footer from "./navigation/Footer.svelte";
    import NavBar from "./navigation/NavBar.svelte";
    import BentoCard from "./ui/bento/BentoCard.svelte";
    import BentoLayout from "./ui/bento/BentoLayout.svelte";
    import BentoRow from "./ui/bento/BentoRow.svelte";
    import Introduction from "./ui/Introduction.svelte";
</script>

<div>
    <NavBar></NavBar>
    <Introduction
        name="The Architecture"
        description="Meet the actors that make Atlas Engine a powerful and flexible tool for developers."
        imageSrc="/images/sponza3.png"
    ></Introduction>
    <div class="w-[1200px] flex flex-col mx-auto my-10">
        <BentoLayout spacing="3rem">
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class="w-[50%]">
                            <p class="font-sans text-3xl font-bold text-white">
                                Atlas
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Atlas is the main engine, which blends all
                                different actors to make a single powerful and
                                flexible tool for developers. It provides a
                                robust core that handles essential
                                functionalities like rendering, physics, input
                                management, and scene management.
                            </p>
                        </div>
                        <div class="ml-auto w-[50%] overflow-hidden">
                            <img
                                src="/images/sponza4.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block p-5"
                            />
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class=" w-[50%] overflow-hidden">
                            <img
                                src="/images/for_lib/aurora.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                        <div class="w-[50%] ml-10">
                            <p class="font-sans text-3xl font-bold text-white">
                                Aurora
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Aurora is the terrain system of Atlas. It
                                handles massive terrain and landscape and its
                                able to generate stunning and realistic outdoor
                                environments with high performance. Aurora is
                                optimized for performance and visual quality,
                                ensuring that your scenes look stunning while
                                maintaining smooth frame rates.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class="w-[50%]">
                            <p class="font-sans text-3xl font-bold text-white">
                                Bezel
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Bezel is our Physics Engine (still in
                                development), responsible for simulating
                                realistic physical interactions. Right now, it
                                can handle spherical and box collisions with
                                ease, and we're continuously working to expand
                                its capabilities to include more complex shapes
                                and interactions. During the Alpha 5 release, we
                                plan to integrate Jolt Physics into Atlas to
                                provide advanced physics simulation
                                capabilities, enhancing the realism of physical
                                interactions within the engine.
                            </p>
                        </div>
                        <div class="ml-auto w-[50%] overflow-hidden">
                            <img
                                src="/images/render_sample.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block p-0"
                            />
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class=" w-[50%] overflow-hidden">
                            <img
                                src="/images/sunset.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                        <div class="w-[50%] ml-10">
                            <p class="font-sans text-3xl font-bold text-white">
                                Finewave
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Finewave is our audio engine that provides a
                                cohesive audio experience within Atlas. It
                                manages sound playback, 3D audio positioning,
                                and environmental effects to create an immersive
                                auditory environment. Finewave is designed to be
                                modular, allowing developers to easily integrate
                                and customize audio features to suit their
                                project's needs.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class="w-[50%]">
                            <p class="font-sans text-3xl font-bold text-white">
                                Hydra
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Hydra is the atmosphere rendering system of
                                Atlas. It handles the sunlight you see, the
                                dynamic skybox generation and even provides
                                simple fluid rendering for water bodies. Hydra
                                is optimized for performance and visual quality,
                                ensuring that your scenes look stunning while
                                maintaining smooth frame rates.
                            </p>
                        </div>
                        <div class="ml-auto w-[50%] overflow-hidden">
                            <img
                                src="/images/for_lib/hydra.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block p-0"
                            />
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-row p-3">
                        <div class=" w-[50%] overflow-hidden">
                            <img
                                src="/images/sponza2.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                        <div class="w-[50%] ml-10">
                            <p class="font-sans text-3xl font-bold text-white">
                                Opal
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Opal is our in-house rendering backend that
                                abstracts the Vulkan and OpenGL APIs. It
                                provides a unified interface for rendering
                                operations, allowing developers to write
                                graphics code without worrying about the
                                underlying graphics API. Opal is designed to be
                                efficient and flexible, supporting advanced
                                rendering techniques and optimizations to
                                deliver high-quality visuals.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
        </BentoLayout>
    </div>
    <Footer></Footer>
</div>
