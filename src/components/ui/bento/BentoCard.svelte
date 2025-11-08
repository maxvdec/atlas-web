<script lang="ts">
    import { scrollReveal } from "../../../scripts/scrollReveal";

    let { offset = 0, reveal = { x: 0, y: 32 }, children } = $props();
</script>

<div
    class="from-gray-800 to-gray-900 bg-linear-to-b border border-gray-700 rounded-4xl shadow-md p-6 h-100 overflow-hidden"
    style={`width: calc(100% + ${offset}px);`}
    use:scrollReveal={{ ...reveal }}
>
    {@render children()}
</div>
