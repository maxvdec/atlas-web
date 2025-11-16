<script lang="ts">
    import type { propsToFilename } from "astro/assets/utils";
    import { scrollReveal } from "../../../scripts/scrollReveal";

    let {
        offset = 0,
        heightOffset = 0,
        autoHeight = false,
        reveal = { x: 0, y: 32 },
        disableReveal = false,
        class: className = "",
        children,
        ...otherProps
    } = $props();

    const defaultClass =
        "from-gray-800 to-gray-900 bg-linear-to-b border border-gray-700 rounded-4xl shadow-md p-6 h-100 overflow-hidden";

    const resolvedClass = $derived(
        `${(className || defaultClass).trim()} responsive-bento-card`,
    );
</script>

<div
    class={resolvedClass}
    style={`width: calc(100% + ${offset}px); height: ${autoHeight ? "auto" : `calc(25rem + ${heightOffset}px)`};`}
    use:scrollReveal={!disableReveal ? { ...reveal } : undefined}
    {...otherProps}
>
    {@render children()}
</div>

<style>
    :global(.responsive-bento-card) {
        max-width: 100%;
    }

    @media (max-width: 1024px) {
        :global(.responsive-bento-card) {
            width: 100% !important;
            height: auto !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
</style>
