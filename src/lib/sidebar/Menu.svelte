<script lang="ts">
    import Icon from '@iconify/svelte'
    import { page } from '$app/state'
    import { fade } from 'svelte/transition'
    import { clickSoundStore } from '$lib/utils/clickSoundStore.svelte'
    const menus = [
        {
            title: 'About this Viet guy',
            path: '/',
            icon: 'fa6-regular:address-card',
            img: '/img/fantasy/elve.png',
        },
        {
            title: 'Research',
            path: '/research',
            icon: 'tabler:math',
            img: '/img/fantasy/potion.png',
        },
        {
            title: 'Teaching',
            path: '/teaching',
            icon: 'tdesign:education-filled',
            img: '/img/fantasy/book-2.png',
        },
        {
            title: 'Coding',
            path: '/coding',
            icon: 'jam:code',
            img: '/img/fantasy/tablet.png',
        },
        // {
        //     title: 'Blog',
        //     path: '/blog',
        //     icon: 'mingcute:pen-line',
        // },
        {
            title: 'Gallery',
            path: '/gallery',
            icon: 'solar:gallery-bold',
            img: '/img/fantasy/card-elve-heart.png',
        },
        {
            title: 'Miscellany',
            path: '/misc',
            icon: 'bx:box',
            img: '/img/fantasy/gold_chest.png',
        },
        {
            title: 'CV',
            path: '/CV.pdf',
            isExternal: true,
            icon: 'tabler:quote-filled',
            img: '/img/fantasy/document.png',
        },
    ]
    function isMatchPath(path: string) {
        return page.url.pathname == path || page.url.pathname == path + '/'
    }
    function handleMenuClick(e: MouseEvent) {
        clickSoundStore.play()
    }
</script>

<svelte:head></svelte:head>

<nav class="mt-4 w-full">
    {#each menus as menu}
        <a
            href={menu.path}
            target={menu.isExternal ? '_blank' : ''}
            class={`card relative font-semibold text-[0.9em] mt-2 ${isMatchPath(menu.path) && '!bg-primary !text-white border-1'} transition-colors`}
            onclick={handleMenuClick}
        >
            {#if menu.img && isMatchPath(menu.path)}
                <div class="w-8 h-5"></div>
                <img
                    in:fade
                    src={menu.img}
                    alt={menu.title}
                    class="absolute w-9 h-9 left-[6px] top-[2px]"
                />
            {:else}
                <div class="w-5 h-5 mr-3">
                    <Icon icon={menu.icon} class="mt-[2px] w-full h-full" />
                </div>
            {/if}
            <span class="mt-[2px]">{menu.title}</span>
        </a>
    {/each}
</nav>
