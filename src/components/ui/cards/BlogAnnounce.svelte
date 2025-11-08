<script lang="ts">
    import type { BlogPost } from "../../../scripts/blog";
    import { scrollReveal } from "../../../scripts/scrollReveal";

    let { blogPostRaw } = $props();

    let blogPost = blogPostRaw as BlogPost;
</script>

<a
    class="w-80 h-96 from-gray-800 to-gray-900 bg-linear-to-b border border-gray-700 rounded-4xl shadow-md hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out overflow-hidden relative"
    use:scrollReveal={{ y: 40 }}
    href={blogPost.link}
>
    <img
        src={blogPost.imageUrl}
        alt={blogPost.title}
        class="w-150 h-150 object-cover -mt-20"
    />
    <div
        class="absolute bottom-0 w-[calc(100%-1rem)] bg-gray-400/60 backdrop-blur-sm h-[calc(100%/3)] flex ml-2 mb-3 shadow-2xl rounded-2xl flex-col"
    >
        <p class="text-white text-lg font-bold m-3">{blogPost.title}</p>
        <p class="text-gray-200 text-sm mx-3 line-clamp-3">
            {blogPost.description}
        </p>
    </div>
</a>
