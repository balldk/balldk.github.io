<script>
    import Image from 'svimg/Image.svelte'
    import PhotoCard from '$lib/gallery/components/PhotoCard.svelte'
    import StickerTitle from '$lib/common/components/StickerTitle.svelte'
    import ImageFade from '$lib/sidebar/ImageFade.svelte'
    import { pageLoadStore } from '$lib/common/stores/pageLoadStore.svelte'

    const photos = [
        {
            desc: 'A view of the area where I grew up',
            location: 'Thu Duc district, HCMC',
            imgUrl: '/img/gallery/img1.jpg',
            class: '',
        },
        {
            desc: 'My muscular cat',
            location: 'Home',
            imgUrl: '/img/gallery/muscular-cat.jpg',
            class: '',
        },
        {
            desc: 'A random coffee shop with a random bird',
            location: 'The Coffee House',
            imgUrl: '/img/gallery/coffee-bird.jpg',
            class: '',
        },
        {
            desc: 'Paramount theater at downtown mall',
            location: "Downtown mall, C'ville",
            imgUrl: '/img/gallery/paramount-theater.jpg',
            class: '',
        },
        {
            desc: "A random UVa's building",
            location: 'University of Virginia',
            imgUrl: '/img/gallery/uva-building.jpg',
            class: '',
        },
    ]
    let animationDelay = pageLoadStore.isFirstEnter ? 1 : 0.2
</script>

<svelte:head>
    <title>Gallery</title>
</svelte:head>

<!-- <StickerTitle content="Gallery" /> -->
<h1>Gallery</h1>

<br />

<div class="grid grid-cols-[repeat(auto-fit,minmax(15em,1fr))] gap-2">
    {#each photos as photo, index}
        <ImageFade id={photo.imgUrl} delay={animationDelay + index * 0.08} once={true}>
            <PhotoCard {...photo}>
                <img src={photo.imgUrl} alt="sunset" class="w-56 h-72 mb-3 object-cover" />
            </PhotoCard>
        </ImageFade>
    {/each}
</div>
