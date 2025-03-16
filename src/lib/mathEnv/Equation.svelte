<script module>
    let count = 0
</script>

<script lang="ts">
    import type { MathEnvProp } from './mathEnv.types'

    const { children, label, level }: MathEnvProp = $props()

    const tag = `eq:${label || count}`
    count++
    console.log({ level })
</script>

<div class="relative" id={tag}>
    {@render children()}
    <a class="not-post-link absolute right-0 top-1 hover:underline" href={`#${tag}`}>({count})</a>
</div>
