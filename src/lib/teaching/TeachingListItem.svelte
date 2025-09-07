<script>
    let { uni, term, title, description, imgUrl } = $props()
</script>

<div class="grid grid-cols-[3em_8em_6em_12em_auto] text-[0.9em] border-dashed border-t-1 py-2">
    <img src={imgUrl} alt={title} class="inline h-6 mr-1 mt-[-3px]" />
    <div class="">
        <span>{uni}</span>
    </div>
    <div class="">{term}</div>
    <div class="">{title}</div>
    <div class="">{description}</div>
</div>
