<script lang="ts">
    const { content }: { content: string } = $props()
</script>

<h1 class="paint-order">
    <span>Super</span>
    <div>
        <span>CSS</span>
        <span>World</span>
    </div>
</h1>

<style lang="scss">
    .paint-order {
        paint-order: stroke fill;

        color: blue;
    }
</style>
