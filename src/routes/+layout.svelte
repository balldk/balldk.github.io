<script lang="ts">
    import { onMount } from 'svelte'
    import '../app.css'
    import '../app.scss'
    import { clickSoundStore } from '$lib/common/stores/clickSoundStore.svelte'
    import { pageLoadStore } from '$lib/common/stores/pageLoadStore.svelte'
    let { children } = $props()

    onMount(() => {
        pageLoadStore.init()
        clickSoundStore.init()

        document.querySelector('body')?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement | null

            if (target?.tagName === 'A') {
                clickSoundStore.play()
            }
        })
    })
</script>

{@render children()}
