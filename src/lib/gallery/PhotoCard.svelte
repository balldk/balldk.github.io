<script>
    import Icon from '@iconify/svelte'
    let { children } = $props()
</script>

<div class="photo-card inline-block w-fit h-fit bg-white p-3">
    <figure class="table">
        {@render children()}
        <figcaption class="table-caption caption-bottom">
            <div class="flex mb-1">
                <Icon icon="akar-icons:location" class="mr-1" />
                <span class="text-sm font-semibold">Thu Duc district, HCMC</span>
            </div>
            <p class="text-sm text-wrap center !mb-1 ml-1">A view of the area where I grew up</p>
        </figcaption>
    </figure>
</div>

<style lang="scss">
    // @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Indie+Flower&display=swap');

    .photo-card {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        // font-family: 'Indie Flower', cursive;
        p {
            // font-family: 'Caveat', cursive;
            // font-family: 'Indie Flower', cursive;
        }
    }
</style>
