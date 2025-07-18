<script lang="ts">
    import MenuItem from './MenuItem.svelte'

    const imageModules = import.meta.glob(
        '$assets/img/fantasy/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
        { eager: true, query: { enhanced: true } }
    ) as any

    const menus = [
        {
            title: 'About this Viet guy',
            path: '/',
            icon: 'fa6-regular:address-card',
            img: '/src/assets/img/fantasy/elve.png',
        },
        {
            title: 'Research',
            path: '/research',
            icon: 'tabler:math',
            img: '/src/assets/img/fantasy/potion.png',
        },
        {
            title: 'Teaching',
            path: '/teaching',
            icon: 'tdesign:education-filled',
            img: '/src/assets/img/fantasy/book-2.png',
        },
        {
            title: 'Coding',
            path: '/coding',
            icon: 'jam:code',
            img: '/src/assets/img/fantasy/tablet.png',
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
            img: '/src/assets/img/fantasy/card-elve-heart.png',
        },
        {
            title: 'Miscellany',
            path: '/misc',
            icon: 'bx:box',
            img: '/src/assets/img/fantasy/gold_chest.png',
        },
        // {
        //     title: 'CV',
        //     path: '/CV.pdf',
        //     isExternal: true,
        //     icon: 'tabler:quote-filled',
        //     img: '/src/assets/img/fantasy/document.png',
        // },
    ]
</script>

<svelte:head></svelte:head>

<nav class="mt-4 w-full">
    {#each menus as menu}
        <MenuItem {menu} {imageModules} />
    {/each}
</nav>
