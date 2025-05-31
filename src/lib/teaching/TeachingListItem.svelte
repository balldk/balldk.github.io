<script>
    let { uni, term, title, description } = $props()
</script>

<div class="grid grid-cols-[12em_6em_10em_auto] text-[0.9em] border-dashed border-t-1 py-2">
    <div class="">
        <img src="/img/hcmus-logo.png" alt={title} class="inline h-6 mr-1 mt-[-3px]" />
        <span>{uni}</span>
    </div>
    <div class="">{term}</div>
    <div class="">{title}</div>
    <div class="">{description}</div>
</div>
