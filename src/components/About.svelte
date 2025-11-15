<script lang="ts">
    import MarkdownExtract from "./MarkdownExtract.svelte";
    import content from "../content/about.md?raw";
</script>

<div>
    <MarkdownExtract
        title="About Atlas Engine"
        description="Learn more about Atlas Engine's History and Mission"
        image="/images/for_lib/hydra.png"
        markdown={content}
    />
</div>
