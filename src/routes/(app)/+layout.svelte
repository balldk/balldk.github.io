<script lang="ts">
    import Sidebar from '$lib/sidebar/Sidebar.svelte'
    import { fly } from 'svelte/transition'
    import { page } from '$app/state'
    import { onMount } from 'svelte'
    import Nyan from '$lib/Nyan.svelte'

    let { children } = $props()
    onMount(() => {
        console.log(page.url.pathname)
    })
</script>

<div class="flex min-h-screen bg-background text-text font-cooper">
    <Sidebar />

    {#key page.url.pathname}
        <main in:fly={{ x: -50 }} class="flex-1 h-dvh overflow-auto px-14 py-8">
            {@render children()}
        </main>
    {/key}

    <div class="fixed bottom-0 left-0 w-screen h-4 bg-pink border-dashed border-t-2 border-black">
        <Nyan />
    </div>
</div>
