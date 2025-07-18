<script>
    import Image from 'svimg/Image.svelte'
    import PhotoCard from '$lib/gallery/components/PhotoCard.svelte'
    import StickerTitle from '$lib/common/components/StickerTitle.svelte'
</script>

<svelte:head>
    <title>Gallery</title>
</svelte:head>

<!-- <StickerTitle content="Gallery" /> -->
<h1>Gallery</h1>

<br />
<PhotoCard>
    <img src="/img/gallery/img1.jpg" alt="sunset" class="w-56 h-64 mb-2 object-cover" />
</PhotoCard>
