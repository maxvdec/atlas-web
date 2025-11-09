<script lang="ts">
    let { name, description = "", imageSrc = "" } = $props();
</script>

<div class="mt-16 text-white mb-16">
    <div class="flex flex-col items-center mx-40 pt-10 relative">
        <div class="w-full h-150 relative">
            <img
                src={imageSrc}
                alt={name}
                class="w-full h-150 object-cover rounded-3xl mb-10 relative z-10"
            />
        </div>

        <div class="absolute bottom-0 left-0 z-20 p-10 mb-10">
            <p class="font-sans font-bold text-6xl mb-3">{name}</p>
            <p class="font-sans text-xl pl-2">{description}</p>
        </div>
    </div>
</div>
