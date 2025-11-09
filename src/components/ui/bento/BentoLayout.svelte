<script lang="ts">
    let { className = "", spacing = "1rem", children } = $props();
</script>

<div
    class={className}
    style={`display: flex; flex-direction: column; gap: ${spacing};`}
>
    {@render children()}
</div>
