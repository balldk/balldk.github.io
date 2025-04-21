<script lang="ts">
    import { pageLoadStore } from '$lib/pageLoadStore.svelte'
    import ProjectCard from '$lib/coding/ProjectCard.svelte'
    import ImageFade from '$lib/sidebar/ImageFade.svelte'

    const projects = [
        {
            img: '/img/project/screenshot-zlibrary.png',
            title: 'ZLibrary Searcher',
            description:
                'A Chrome extension to download books from ZLibrary (without third-party server).',
            url: 'https://chromewebstore.google.com/detail/zlibrary-searcher/hacdelicpoafdkmkehadcdfkmkakiclf',
            githubUrl: 'https://github.com/balldk/zlib-extension',
        },
        {
            img: '/img/project/screenshot-vanvo.png',
            title: 'VanVo',
            description:
                'A Vietnamese programming language with proper syntax highlighting and documents (and more).',
            url: '/posts/vanvo',
            githubUrl: 'https://balldk.github.io/posts/vanvo/',
        },
        {
            img: '/img/project/screenshot-perfect-circle.jpeg',
            title: 'Perfect circle',
            description: 'A game where you try to draw a circle as perfectly as possible.',
            url: 'https://balldk.github.io/perfect-circle',
            githubUrl: 'https://github.com/balldk/perfect-circle',
        },
        {
            img: '/img/project/screenshot-crawl-score.jpg',
            title: 'Crawl scores 2024',
            description:
                'A script to crawl all (public) scores from Vietnamese national high school exam 2024.',
            githubUrl: 'https://github.com/balldk/crawlscore-thptqg-2024',
        },
    ]
    let animationDelay = pageLoadStore.isFirstEnter ? 1 : 0.2
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(18em,1fr))] gap-4 mt-2">
    {#each projects as project, index}
        <ImageFade id={project.url} delay={animationDelay + index * 0.08} once={true}>
            <ProjectCard {...project} />
        </ImageFade>
    {/each}
</div>
