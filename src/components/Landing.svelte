<script lang="ts">
    import NavBar from "./navigation/NavBar.svelte";

    let randomNumbers100 = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 100),
    );
</script>

<div>
    <NavBar></NavBar>
</div>
