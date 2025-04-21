<script lang="ts">
    import Sidebar from '$lib/sidebar/Sidebar.svelte'
    import { fly } from 'svelte/transition'
    import { page } from '$app/state'
    import { onMount } from 'svelte'
    import Nyan from '$lib/Nyan.svelte'
    import { pageLoadStore } from '$lib/pageLoadStore.svelte'

    let { children } = $props()
    onMount(() => {
        setTimeout(() => (pageLoadStore.isFirstEnter = false), 200)
        setTimeout(() => (pageLoadStore.loaded = true))
    })
</script>

<svelte:head>
    <title>Khoa ND</title>
</svelte:head>

<div class="md:flex min-h-screen bg-background text-text font-cooper">
    <Sidebar />

    {#key page.url.pathname + pageLoadStore.loaded}
        <main
            in:fly={{
                x: -50,
                delay: pageLoadStore.isFirstEnter ? 600 : 0,
            }}
            class={`flex-1 h-dvh overflow-auto md:px-14 px-6 py-8 ${pageLoadStore.loaded ? '' : 'opacity-0'}`}
        >
            {@render children()}
        </main>
    {/key}

    {#if pageLoadStore.loaded}{/if}
    <div class="fixed bottom-0 left-0 w-screen h-4 bg-white border-dashed border-t-2 border-black">
        <Nyan />
    </div>
</div>
