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
        name="Welcome to the Atlas Engine"
        description="Discover the power of our platform, tailored to your needs."
        imageSrc="/images/sponza.png"
    ></Introduction>
    <div class="atlas-container flex flex-col my-10">
        <BentoLayout spacing="3rem">
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-col gap-6 p-3 lg:flex-row">
                        <div class="w-full lg:w-1/2">
                            <p class="font-sans text-3xl font-bold text-white">
                                Open Source
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Everything is designed with transparency and
                                collaboration in mind. We've built a community
                                with our engine that strongly empowers the open
                                source nature of the project. We store all of
                                our engine in GitHub to see, everything is free
                                for everyone, with no such licensing
                                restrictions like other engines.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 overflow-hidden lg:ml-auto">
                            <img
                                src="/images/repo.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block p-5"
                            />
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-col gap-6 p-3 lg:flex-row">
                        <div class="w-full lg:w-1/2 overflow-hidden">
                            <img
                                src="/images/sponza.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                        <div class="w-full lg:w-1/2 lg:ml-10">
                            <p class="font-sans text-3xl font-bold text-white">
                                Speed
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Atlas Engine is built from the ground up with
                                performance in mind. It leverages modern
                                rendering techniques and optimizations that make
                                the engine fast and efficient. Whether you're
                                developing a small indie game or a large-scale
                                AAA title, Atlas Engine is designed to deliver
                                high performance across a wide range of hardware
                                configurations.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
            <BentoRow>
                <BentoCard>
                    <div class="flex flex-col gap-6 p-3 lg:flex-row">
                        <div class="w-full lg:w-1/2">
                            <p class="font-sans text-3xl font-bold text-white">
                                Our Renderer
                            </p>
                            <p class="font-sans mt-5 text-white">
                                The Atlas Engine renderer is built to deliver
                                stunning visuals while maintaining optimal
                                performance. It supports a wide range of modern
                                rendering techniques like Physically Based
                                Rendering (PBR) and advanced post-processing
                                effects. Our renderer is designed to be flexible
                                and extensible, allowing developers to customize
                                and optimize it for their specific needs.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 overflow-hidden lg:ml-auto">
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
                    <div class="flex flex-col gap-6 p-3 lg:flex-row">
                        <div class="w-full lg:w-1/2 overflow-hidden">
                            <img
                                src="/images/sunset.png"
                                alt="Render Sample"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                        <div class="w-full lg:w-1/2 lg:ml-10">
                            <p class="font-sans text-3xl font-bold text-white">
                                Modular
                            </p>
                            <p class="font-sans mt-5 text-white">
                                Our architecture is designed to be modular, with
                                modules like Bezel, Finewave or others that are
                                built to be easily integratable to your project
                                and they first important features you might need
                                like Atmosphere Rendering or Water Rendering.
                                These modules come packed with the engine, but
                                they can be choose to be used or not when
                                building the project, giving extense flexibility
                                to the developers.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </BentoRow>
        </BentoLayout>
    </div>
    <Footer></Footer>
</div>
