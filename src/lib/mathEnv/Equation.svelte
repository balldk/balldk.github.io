<script lang="ts">
    import type { MathEnvProp } from './mathEnv.types'

    const { children, name, count }: MathEnvProp = $props()

    const tag = `equation:${name || count}`
</script>

<div class="relative" id={tag}>
    {@render children()}
    <a class="not-post-link absolute right-0 top-1 hover:underline" href={`#${tag}`}>({count})</a>
</div>
