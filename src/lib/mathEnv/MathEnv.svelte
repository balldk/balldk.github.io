<script lang="ts">
    import { envLookup, type EnvType } from './mathEnv.types'

    const {
        children,
        type,
        count,
        name,
    }: { children: any; type: EnvType; count: number; name?: string } = $props()

    const label = `${type}:${name || count}`
</script>

<div class="my-1">
    <a
        class="not-post-link font-bold inline cursor-pointer hover:underline first:inline"
        id={`${label}`}
        href={`#${label}`}
    >
        {`${envLookup[type]} ${count}:`}
    </a>
    <span class="math-env">
        {@render children()}
    </span>
</div>
