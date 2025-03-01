<script lang="ts">
    import { math } from 'mathlifier'
    const { children }: { children: any } = $props()
</script>

<div class="math-env relative">
    <span class="italic mr-1">Chứng minh.</span>
    {@render children()}

    <div class="absolute bottom-0 right-0">
        {@html math('\\square')}
    </div>
</div>
