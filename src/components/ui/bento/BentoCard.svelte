<script lang="ts">
    import type { propsToFilename } from "astro/assets/utils";
    import { scrollReveal } from "../../../scripts/scrollReveal";

    let {
        offset = 0,
        heightOffset = 0,
        autoHeight = false,
        reveal = { x: 0, y: 32 },
        class: className = "",
        children,
        ...otherProps
    } = $props();
</script>

<div
    class={`${className || "from-gray-800 to-gray-900 bg-linear-to-b border border-gray-700 rounded-4xl shadow-md p-6 h-100 overflow-hidden"}`}
    style={`width: calc(100% + ${offset}px); height: ${autoHeight ? "auto" : `calc(25rem + ${heightOffset}px)`};`}
    use:scrollReveal={{ ...reveal }}
    {...otherProps}
>
    {@render children()}
</div>
