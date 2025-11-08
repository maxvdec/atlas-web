<script lang="ts">
    let { cardMovements = [], children } = $props();
</script>

<div class="flex flex-row w-full gap-4">
    {@render children()}
</div>
