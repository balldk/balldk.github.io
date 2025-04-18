<script lang="ts">
    import Icon from '@iconify/svelte'

    let { children, class: className = '', icon = null } = $props()
</script>

<div
    class={`card flex py-2 px-4 rounded box-border border-1 border-dashed border-dark bg-white ${className}`}
>
    {#if icon != null}
        <div class="w-5 h-5 mr-3">
            <Icon {icon} class="mt-[2px] w-full h-full" />
        </div>
    {/if}
    {@render children()}
</div>

<style lang="scss">
    .card {
        box-shadow: 2px 2px 0 0.5px #e6d2c3;
        transition: all 0.3s;
        &:hover {
            transform: translate(-2px);
            box-shadow: 2px 2px 0 2px #e6d2c3;
        }
    }
</style>
