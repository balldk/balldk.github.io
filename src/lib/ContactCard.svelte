<script lang="ts">
    import Icon from '@iconify/svelte'
    import Card from './Card.svelte'
    let {
        icon,
        label,
        link,
        class: className = '',
    }: { icon: string; label: string; link: string; class: string } = $props()
</script>

<a target="_blank" href={link}>
    <Card class={`font-semibold text-sm !border-none ${className}`}>
        <div class="w-5 h-5 mr-3">
            <Icon {icon} class="mt-[0px] w-full h-full" />
        </div>
        <span>{label}</span>
    </Card>
</a>
