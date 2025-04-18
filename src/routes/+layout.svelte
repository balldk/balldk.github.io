<script lang="ts">
    import { onMount } from 'svelte'
    import '../app.css'
    import '../app.scss'
    let { children } = $props()
    let clickSound: HTMLAudioElement

    onMount(() => {
        if (clickSound != null) return null
        clickSound = new Audio('/sounds/click.mp3')
        clickSound.volume = 0.5

        document.querySelector('body')?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement | null

            if (
                target?.tagName === 'BUTTON' ||
                target?.tagName === 'A' ||
                target?.className.startsWith('card ')
            ) {
                clickSound.currentTime = 0
                clickSound.play()
            }
        })
    })
</script>

{@render children()}
