<script lang="ts">
    let { cardMovements = [], children } = $props();
</script>

<div class="flex w-full flex-col gap-4 lg:flex-row">
    {@render children()}
</div>
