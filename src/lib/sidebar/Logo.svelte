<script>
    import { fade } from 'svelte/transition'

    let showHat = $state(false)
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="logo-container relative mx-auto my-0 w-36 h-36 hover:boder-none"
    onmouseenter={() => (showHat = true)}
    onmouseleave={() => (showHat = false)}
>
    <enhanced:img
        src="$assets/img/portrait.png"
        alt="Logo"
        class="logo glow-hover relative bg-[#d9ffb6] w-full h-full border-solid border-primary border-2 object-contain object-center"
    />
    {#if showHat}
        <enhanced:img
            transition:fade={{ duration: 300 }}
            src="$assets/img/fantasy/wizard-hat-2.png"
            alt="wizard-hat"
            class="absolute top-[-2em] left-[-1.2em] max-w-[11em] rotate-[-8deg]"
        />
    {/if}
</div>

<style lang="scss">
    .logo {
        animation: morph 6s ease-in-out infinite;

        @keyframes morph {
            0% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }

            50% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }

            100% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
        }
    }
</style>
