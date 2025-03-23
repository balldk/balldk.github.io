<script lang="ts">
    import { onMount } from 'svelte'
    import type { Meta } from './blog.types'
    const { meta }: { meta: Meta } = $props()

    const date = new Date(meta.date)
    const month = date.toLocaleString('default', { month: 'long' })
    const readTimeText =
        meta.readTime <= 1 ? '< 1 min read' : `${Math.round(meta.readTime)} min read`
</script>

<div class="grid grid-cols-3 text-sm border-solid border-t-2 border-black">
    <div>No. 01</div>
    {#if date.getDate()}
        <div class="text-center">Posted in {date.getDate()} {month} {date.getFullYear()}</div>
    {:else}
        <div></div>
    {/if}
    <div class="text-right">{readTimeText}</div>
</div>

<div class="mb-6 title-container py-3 border-solid border-y-2 border-black">
    <h1 class="text-center font-bold text-4xl">
        {meta.title}
    </h1>
</div>
