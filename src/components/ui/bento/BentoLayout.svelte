<script lang="ts">
    let { className = "", children } = $props();
</script>

<div
    class={className}
    style="display: flex; flex-direction: column; gap: 1rem;"
>
    {@render children()}
</div>
