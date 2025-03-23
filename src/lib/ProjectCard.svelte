<script lang="ts">
    import Icon from '@iconify/svelte'

    let {
        img,
        title,
        description,
        githubUrl,
        url,
    }: { img: string; title: string; description: string; githubUrl?: string; url?: string } =
        $props()
</script>

<div class="bg-white rounded-[1em] card-shadow p-2">
    <img src={img} alt="" class="object-cover object-left-top w-full h-52 rounded-t-[0.8em]" />
    <div class="p-2">
        <div class="flex gap-1">
            <h3>{title}</h3>
            {#if url}
                <a href={url} target="_blank" class="hover:!border-b-0 translate-y-[2px] !border-0">
                    <Icon icon="line-md:link" width={24} height={24} />
                </a>
            {/if}
            {#if githubUrl}
                <a
                    href={githubUrl}
                    target="_blank"
                    class="hover:!border-b-0 translate-y-[2px] !border-0"
                >
                    <Icon icon="mdi:github" width={24} height={24} />
                </a>
            {/if}
        </div>
        <p class="text-sm">{description}</p>
    </div>
</div>

<style>
    .card-shadow {
        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
</style>
