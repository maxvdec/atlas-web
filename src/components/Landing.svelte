<script lang="ts">
    import NavBar from "./navigation/NavBar.svelte";

    let randomNumbers100 = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 100),
    );
</script>

<div>
    <NavBar></NavBar>
    <div class="mt-16 text-white">
        <div
            class="text-6xl font-sans font-bold flex justify-center items-center h-150 flex-row"
        >
            <div class="mt-16">
                Build everything,<br />
                and beyond.

                <div
                    class="mt-6 text-lg font-sans font-normal text-gray-400 w-96"
                >
                    Atlas is a powerful, flexible and easy-to-use Game Engine
                    for developing amazing games, build worlds and interactive
                    experiences, open to everyone.
                </div>
            </div>
            <img
                src="/images/landing.png"
                alt="Landing Image"
                class="h-110 w-110 -mt-10 mr-10"
            />
        </div>
        <div class="h-150 items-center bg-amber-400"></div>
    </div>
</div>
