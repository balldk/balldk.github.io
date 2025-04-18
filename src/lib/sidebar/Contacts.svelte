<script>
    import Icon from '@iconify/svelte'
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
</script>

<div class="flex gap-4 mx-auto">
    {#each contacts as contact}
        <a href={contact.link} target="_blank">
            <Icon icon={contact.icon} class="w-7 h-7" color={contact.color} />
        </a>
    {/each}
</div>
