<script lang="ts">
    import Footer from "../navigation/Footer.svelte";
    import NavBar from "../navigation/NavBar.svelte";
    import Introduction from "../ui/Introduction.svelte";
</script>

<div>
    <NavBar></NavBar>
    <Introduction
        name="Tutorials"
        description="Explore more tutorials for Atlas Engine"
        imageSrc="/images/sponza4.png"
    ></Introduction>
    <div
        class="flex justify-center items-center text-white mb-10 text-3xl font-bold"
    >
        <p>Right now, there are no tutorials available.</p>
    </div>
    <Footer></Footer>
</div>
