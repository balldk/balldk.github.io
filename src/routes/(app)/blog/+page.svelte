<script lang="ts">
    import { onMount } from 'svelte'

    import 'highlight.js/styles/base16/solarized-light.css'
    import type { PostData } from '$lib/blog/blog.types'

    let { data }: { data: PostData } = $props()

    onMount(() => {
        console.log('data Giang', data.posts)
    })
</script>

<div class="bg-background min-h-full">
    {#if data.posts}
        {#each data.posts as post}
            <div class="max-w-2xl mx-auto">
                <h1 class="text-4xl font-bold text-center mt-8">{post.meta.title}</h1>
                <div class="text-center mt-4">
                    <span class="text-sm text-gray-500">{post.meta.date}</span>
                </div>
                <div class="mt-8">
                    {@html post.content.slice(0, 200)}
                </div>
            </div>
        {/each}
    {/if}
</div>
