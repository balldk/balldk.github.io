<script lang="ts">
    import Icon from '@iconify/svelte'
    import { math } from 'mathlifier'
    import { slide } from 'svelte/transition'
    const { children }: { children: any } = $props()

    let isShow = $state(true)

    function toggleShow() {
        isShow = !isShow
    }
</script>

<div class="math-env relative">
    <button class="italic mr-1 cursor-pointer hover:underline" onclick={toggleShow}>
        <Icon
            icon="fluent:triangle-right-12-filled"
            class={`inline mb-1 ${isShow ? 'rotate-90' : ''} transition-all duration-300`}
        />
        Chứng minh.
    </button>
    {#if isShow}
        <div transition:slide>
            {@render children()}
        </div>
    {/if}

    <div class="absolute bottom-0 right-0">
        {@html math('\\square')}
    </div>
</div>

<style>
    .math-env :global(p:first-of-type) {
        display: inline;
    }
</style>
