<script lang="ts">
    import { page } from '$app/state'
    import Icon from '@iconify/svelte'
    import Logo from './Logo.svelte'

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
        {
            title: 'Blog',
            path: '/blog',
            icon: 'mingcute:pen-line',
        },
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

    function isMatchPath(path: string) {
        return page.url.pathname == path || page.url.pathname == path + '/'
    }
</script>

<aside class="w-72 p-6 pt-10 border-r-2 border-dashed border-black">
    <Logo />
    <h1 class="text-[2.6em] text-center font-bold font-danhda">Khoa Nguyen-Dinh</h1>
    <nav class="mt-6 space-y-1">
        {#each menus as menu}
            <a
                href={menu.path}
                target={menu.isExternal ? '_blank' : ''}
                class={`flex py-2 px-4 rounded hover:bg-black hover:text-primary box-border font-semibold text-[0.9em] border-dashed border-1 border-black ${isMatchPath(menu.path) && 'bg-pink border-2'} transition-colors`}
            >
                <Icon icon={menu.icon} class="mr-4 mt-[3px] w-5 h-5" />
                <span class="mt-[2px]">{menu.title}</span>
            </a>
        {/each}
    </nav>
</aside>
