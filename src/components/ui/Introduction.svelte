<script lang="ts">
    let { name, description = "", imageSrc = "" } = $props();
</script>

<div class="mt-24 text-white mb-16">
    <div class="mx-auto flex flex-col px-6 sm:px-10 lg:px-20">
        <div
            class="relative w-full max-w-[1350px] h-[420px] sm:h-[520px] lg:h-[550px] mx-auto rounded-3xl overflow-hidden shadow-lg"
        >
            <img src={imageSrc} alt={name} class="w-full h-full object-cover" />
            <div class="absolute inset-x-0 bottom-0 p-8 sm:p-10 space-y-3">
                <p class="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl">
                    {name}
                </p>
                {#if description}
                    <p
                        class="font-sans text-base sm:text-lg lg:text-xl max-w-3xl"
                    >
                        {description}
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>
