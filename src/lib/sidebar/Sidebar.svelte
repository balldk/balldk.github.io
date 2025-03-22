<script lang="ts">
    import { page } from '$app/state'
    import Icon from '@iconify/svelte'
    import Logo from './Logo.svelte'
    import { fade } from 'svelte/transition'

    const menus = [
        {
            title: 'About this Viet guy',
            path: '/',
            icon: 'fa6-regular:address-card',
        },
        {
            title: 'Research',
            path: '/research',
            icon: 'tabler:math',
        },
        {
            title: 'Teaching',
            path: '/teaching',
            icon: 'tdesign:education-filled',
        },
        {
            title: 'Coding',
            path: '/coding',
            icon: 'jam:code',
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
        },
        {
            title: 'CV',
            path: '/CV.pdf',
            isExternal: true,
            icon: 'tabler:quote-filled',
        },
    ]

    const contacts = [
        {
            icon: 'mdi:github',
            link: 'https://github.com/balldk',
        },
        {
            icon: 'ic:baseline-facebook',
            link: 'https://www.facebook.com/nddkhoaaa',
        },
        {
            icon: 'ic:baseline-email',
            link: 'mailto:nddkhoaa@gmail.com',
        },
    ]

    function isMatchPath(path: string) {
        return page.url.pathname == path || page.url.pathname == path + '/'
    }
</script>

<aside class="grid grid-rows-[93%_auto] pt-5 md:border-r-2 border-dashed border-black">
    <div class="p-6">
        <Logo />
        <h1 class="sidebar-heading text-center sidebar-heading">Khoa Nguyen-Dinh</h1>
        <nav class="mt-6 space-y-1 w-full">
            {#each menus as menu}
                <a
                    href={menu.path}
                    target={menu.isExternal ? '_blank' : ''}
                    class={`flex py-2 px-4 rounded hover:bg-black hover:text-primary box-border font-semibold text-[0.9em] border-dashed border-1 border-black ${isMatchPath(menu.path) && 'bg-pink border-2'} transition-colors`}
                >
                    <div class="w-5 h-5 mr-3">
                        <Icon icon={menu.icon} class="mt-[2px] w-full h-full" />
                    </div>
                    <span class="mt-[2px]">{menu.title}</span>
                </a>
            {/each}
        </nav>
    </div>
    <div class="flex gap-6 mx-auto">
        {#each contacts as contact}
            <a href={contact.link}>
                <Icon icon={contact.icon} class="w-7 h-7" />
            </a>
        {/each}
    </div>
</aside>

<style>
    .sidebar-heading {
        font-family: 'Danh Da', 'Arial Narrow', Arial, sans-serif;
        font-size: 2.6em;
        font-size-adjust: 0.455;
        text-wrap: nowrap;
    }
</style>
