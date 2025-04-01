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
            // img: '/img/fantasy/elve.png',
        },
        {
            title: 'Research',
            path: '/research',
            icon: 'tabler:math',
            // img: '/img/fantasy/potion.png',
        },
        {
            title: 'Teaching',
            path: '/teaching',
            icon: 'tdesign:education-filled',
            // img: '/img/fantasy/book-2.png',
        },
        {
            title: 'Coding',
            path: '/coding',
            icon: 'jam:code',
            // img: '/img/fantasy/tablet.png',
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
            // img: '/img/fantasy/card-elve-heart.png',
        },
        {
            title: 'Miscellany',
            path: '/misc',
            icon: 'bx:box',
            // img: '/img/fantasy/gold_chest.png',
        },
        {
            title: 'CV',
            path: '/CV.pdf',
            isExternal: true,
            icon: 'tabler:quote-filled',
            // img: '/img/fantasy/document.png',
        },
    ]

    const contacts = [
        {
            icon: 'mdi:github',
            link: 'https://github.com/balldk',
            color: '#4e5560',
        },
        {
            icon: 'ic:baseline-facebook',
            link: 'https://www.facebook.com/nddkhoaaa',
            color: '#1888c6',
        },
        {
            icon: 'ic:baseline-email',
            link: 'mailto:nddkhoaa@gmail.com',
            color: '#f17e6d',
        },
    ]

    function isMatchPath(path: string) {
        return page.url.pathname == path || page.url.pathname == path + '/'
    }
</script>

<aside class="grid grid-rows-[93%_auto] pt-5 md:border-r-2 border-dashed border-black">
    <div class="p-6 md:w-72">
        <Logo />
        <h1 class="sidebar-heading text-center">Khoa Nguyen-Dinh</h1>
        <nav class="mt-6 space-y-2 w-full">
            {#each menus as menu}
                <a
                    href={menu.path}
                    target={menu.isExternal ? '_blank' : ''}
                    class={`relative flex py-2 px-4 rounded box-border font-semibold text-[0.9em] border-dashed border-1 border-dark ${isMatchPath(menu.path) && '!bg-[#5c3c3d] !text-white border-1'} transition-colors`}
                >
                    <!-- {#if menu.img}
                        <div class="w-8 h-5"></div>
                        <img
                            src={menu.img}
                            alt={menu.title}
                            class="absolute w-9 h-9 left-[6px] top-[2px]"
                        />
                    {:else} -->
                    <div class="w-5 h-5 mr-3">
                        <Icon icon={menu.icon} class="mt-[2px] w-full h-full" />
                    </div>
                    <!-- {/if} -->
                    <span class="mt-[2px]">{menu.title}</span>
                </a>
            {/each}
        </nav>
    </div>
    <div class="flex gap-4 mx-auto">
        {#each contacts as contact}
            <a href={contact.link} target="_blank">
                <Icon icon={contact.icon} class="w-7 h-7" color={contact.color} />
            </a>
        {/each}
    </div>
</aside>

<style lang="scss">
    @import '../../variables.scss';
    .sidebar-heading {
        font-family: 'Danh Da', 'Arial Narrow', Arial, sans-serif;
        font-size: 2.6em;
        font-size-adjust: 0.455;
        text-wrap: nowrap;
    }
    nav a {
        box-shadow: 2px 2px 0 0.5px #e6d2c3;
        transition: all 0.3s;
        &:hover {
            transform: translate(-2px);
            box-shadow: 2px 2px 0 2px #e6d2c3;
        }
        background-color: white;
    }
</style>
