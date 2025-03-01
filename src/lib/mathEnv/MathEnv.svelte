<script lang="ts">
    const {
        children,
        title,
        count,
        label,
    }: { children: any; title: string; count: number; label?: string } = $props()
</script>

<div class="my-1 math-env">
    <a
        class="not-post-link font-bold inline cursor-pointer hover:underline"
        id={`${label}`}
        href={`#${label}`}
    >
        {title}
        {count}:
    </a>
    <span class="math-env">
        {@render children()}
    </span>
</div>
