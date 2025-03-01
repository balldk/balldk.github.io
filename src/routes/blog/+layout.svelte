<script lang="ts">
    // import TestComponent from '$lib/TestComponent.svelte'

    const { children }: { children: any } = $props()
    // export { TestComponent as test }
</script>

{@render children()}
