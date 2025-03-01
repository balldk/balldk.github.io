<script module>
    let count = 0
</script>

<script lang="ts">
    import MathEnv from './MathEnv.svelte'

    import type { MathEnvProp } from './mathEnv.types'

    const { children, label }: MathEnvProp = $props()
    count++
</script>

<MathEnv title="Mệnh đề" label={`prop:${label || count}`} {count}>{@render children()}</MathEnv>
