<script>
    import PhotoCard from '$lib/gallery/components/PhotoCard.svelte'
    import ImageFade from '$lib/sidebar/ImageFade.svelte'
    import { pageLoadStore } from '$lib/common/stores/pageLoadStore.svelte'

    const photos = [
        {
            desc: "First time having an apple pie (with peach ice cream on top). Spoiler: it's freaking good!",
            location: 'Carters Mountain',
            imgUrl: '/img/gallery/first-apple-pie.jpg',
            class: '',
        },
        {
            desc: 'Go hiking',
            location: 'Humpback Rocks',
            imgUrl: '/img/gallery/hiking.jpg',
            class: '',
        },
        {
            desc: 'My first convert ever!',
            location: 'John Paul Jones Arena',
            imgUrl: '/img/gallery/first-concert.jpg',
            class: '',
        },
        {
            desc: "A random UVa's building",
            location: 'University of Virginia',
            imgUrl: '/img/gallery/uva-building.jpg',
            class: '',
        },
        {
            desc: 'Paramount theater at downtown mall',
            location: "Downtown mall, C'ville",
            imgUrl: '/img/gallery/paramount-theater.jpg',
            class: '',
        },
        {
            desc: 'Bun Dau - My fav Vietnamese dish',
            location: 'Thu Duc district, HCMC',
            imgUrl: '/img/gallery/bun-dau.jpg',
            class: '',
        },
        {
            desc: 'A random coffee shop with a random bird',
            location: 'The Coffee House',
            imgUrl: '/img/gallery/coffee-bird.jpg',
            class: '',
        },
        {
            desc: 'Stopped by this beautiful sunset while riding home',
            location: 'Le Thi Hoa street, HCMC',
            imgUrl: '/img/gallery/sunset.jpg',
            class: '',
        },
        {
            desc: 'A view of the area where I grew up',
            location: 'Song Than bridge, Di An',
            imgUrl: '/img/gallery/img1.jpg',
            class: '',
        },
        {
            desc: 'My muscular cat',
            location: 'Home',
            imgUrl: '/img/gallery/muscular-cat.jpg',
            class: '',
        },
    ]
    let animationDelay = pageLoadStore.isFirstEnter ? 1 : 0.2
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(15em,1fr))] gap-2">
    {#each photos as photo, index}
        <ImageFade id={photo.imgUrl} delay={animationDelay + index * 0.08} once={true}>
            <PhotoCard {...photo}>
                <img src={photo.imgUrl} alt="sunset" class="w-56 h-72 mb-3 object-cover" />
            </PhotoCard>
        </ImageFade>
    {/each}
</div>
