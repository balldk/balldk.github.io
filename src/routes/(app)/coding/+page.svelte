<script>
    import ProjectCard from '$lib/ProjectCard.svelte'
</script>

<svelte:head>
    <title>Coding</title>
</svelte:head>

<h1>Coding</h1>

<div class="grid grid-cols-[repeat(auto-fit,minmax(18em,1fr))] gap-4 mt-2">
    <ProjectCard
        img="/img/project/screenshot-zlibrary.png"
        title="ZLibrary Searcher"
        description="A Chrome extension to download books from ZLibrary (without third-party server)."
        url="https://chromewebstore.google.com/detail/zlibrary-searcher/hacdelicpoafdkmkehadcdfkmkakiclf"
        githubUrl="https://github.com/balldk/zlib-extension"
    />

    <ProjectCard
        img="/img/project/screenshot-vanvo.png"
        title="VanVo"
        description="A Vietnamese programming language with proper syntax highlighting and documents (and more)."
        url="/posts/vanvo"
        githubUrl="https://balldk.github.io/posts/vanvo/"
    />

    <ProjectCard
        img="/img/project/screenshot-perfect-circle.jpeg"
        title="Perfect circle"
        description="A game where you try to draw a circle as perfectly as possible."
        url="https://balldk.github.io/perfect-circle"
        githubUrl="https://github.com/balldk/perfect-circle"
    />

    <ProjectCard
        img="/img/project/screenshot-crawl-score.jpg"
        title="Crawl scores 2024"
        description="A script to crawl all (public) scores from Vietnamese national high school exam 2024."
        githubUrl="https://github.com/balldk/crawlscore-thptqg-2024"
    />
</div>
