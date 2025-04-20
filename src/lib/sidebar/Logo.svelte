<script>
    import { fade } from 'svelte/transition'

    let showHat = $state(false)
</script>

<!-- <div class="logo-container block mx-auto my-0 w-28 h-28 hover:boder-none">
    <div
        class="logo block relative bg-[url('/logo.svg')] bg-center bg-black bg-repeat bg-cover h-full border-solid border-primary border-2"
    ></div>
</div> -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="logo-container relative block mx-auto my-0 w-36 h-36 hover:boder-none"
    onmouseenter={() => (showHat = true)}
    onmouseleave={() => (showHat = false)}
>
    <div
        class="logo glow-hover block relative bg-[url('/img/portrait.png')] bg-center bg-[#d9ffb6] bg-no-repeat bg-contain h-full border-solid border-primary border-2"
    ></div>
    {#if showHat}
        <img
            transition:fade={{ duration: 300 }}
            src="/img/fantasy/wizard-hat-2.png"
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
