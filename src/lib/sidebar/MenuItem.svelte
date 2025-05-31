<script lang="ts">
    import Icon from '@iconify/svelte'
    import { blur } from 'svelte/transition'
    import { clickSoundStore } from '$lib/common/stores/clickSoundStore.svelte'
    import { page } from '$app/state'

    let { menu, imageModules } = $props<{
        menu: {
            title: string
            path: string
            icon: string
            img?: string
            isExternal?: boolean
        }
        imageModules: Record<string, any>
    }>()

    function isMatchPath(path: string) {
        return page.url.pathname == path || page.url.pathname == path + '/'
    }

    function handleMenuClick(e: MouseEvent) {
        clickSoundStore.play()
    }
</script>

<a
    data-sveltekit-preload-data="hover"
    href={menu.path}
    target={menu.isExternal ? '_blank' : ''}
    class={`card relative font-semibold text-[0.9em] mt-2 ${isMatchPath(menu.path) && '!bg-primary !text-white border-1'} transition-colors`}
    onclick={handleMenuClick}
>
    <enhanced:img src={imageModules[menu.img].default} alt={menu.title} class="hidden" />
    {#if menu.img && isMatchPath(menu.path)}
        <div class="w-8 h-5"></div>
        <div in:blur class="absolute top-[2px] left-[6px] w-9 h-9">
            <enhanced:img src={imageModules[menu.img].default} alt={menu.title} />
        </div>
    {:else}
        <div class="w-5 h-5 mr-3">
            <Icon icon={menu.icon} class="mt-[2px] w-full h-full" />
        </div>
    {/if}
    <span class="mt-[2px]">{menu.title}</span>
</a>
