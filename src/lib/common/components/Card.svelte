<script lang="ts">
    let { title, subtitle, children } = $props()
</script>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
    {#if title}
        <h3 class="text-lg font-semibold">{title}</h3>
    {/if}
    {#if subtitle}
        <p class="text-sm text-gray-500">{subtitle}</p>
    {/if}
    <div class="mt-2">
        {@render children()}
    </div>
</div>
