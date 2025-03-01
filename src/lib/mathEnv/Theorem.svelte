<script module>
    let count = 0
</script>

<script lang="ts">
    import MathEnv from './MathEnv.svelte'
    const { children }: { children: any } = $props()
    count++
</script>

<MathEnv title="Định lí" {count}>{@render children()}</MathEnv>
