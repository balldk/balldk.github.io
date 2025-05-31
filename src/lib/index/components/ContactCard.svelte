<script lang="ts">
    import Icon from '@iconify/svelte'
    let {
        icon,
        label,
        link,
        class: className = '',
    }: { icon: string; label: string; link: string; class: string } = $props()
</script>

<a
    target="_blank"
    href={link}
    class={`card !pl-3 font-semibold text-sm !text-white !border-none ${className}`}
>
    <div class="w-5 h-5 mr-2">
        <Icon {icon} class="mt-[0px] w-full h-full" />
    </div>
    <span>{label}</span>
</a>
