<script lang="ts">
    import type { Snippet } from 'svelte'
    import { fade } from 'svelte/transition'

    let { show = true, duration = 300, children } = $props()
</script>

{#if show}
    <div transition:fade={{ duration }}>
        {@render children()}
    </div>
{/if}
