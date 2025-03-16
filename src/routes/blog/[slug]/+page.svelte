<script lang="ts">
    import type { MarkdownData } from '$lib/blog/blog.types'
    import HeaderIllustration from '$assets/grapevine.png'
    import Footer from '$lib/blog/Footer.svelte'
    import Header from '$lib/blog/Header.svelte'
    import OrnamentImg from '$assets/ornament-line.png'
    import { onMount } from 'svelte'

    import hljs from 'highlight.js/lib/core'
    import 'highlight.js/styles/base16/solarized-light.css'
    import javascript from 'highlight.js/lib/languages/javascript'
    import python from 'highlight.js/lib/languages/python'
    import bash from 'highlight.js/lib/languages/bash'
    import vanvo from '$lib/utils/vanvo'
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('python', python)
    hljs.registerLanguage('vanvo', vanvo)
    hljs.registerLanguage('bash', bash)

    let { data }: { data: MarkdownData } = $props()

    let { content, meta } = data
    console.log(meta)

    onMount(() => {
        hljs.highlightAll()
        // console.log('data', data)
    })
</script>

<div class="bg-background min-h-full">
    <img src={HeaderIllustration} alt="" class="mx-auto mb-0 mt-[-4.5em] z-[-1] h-52" />

    <div class="blog-post lg:mx-auto lg:w-[46em] md:mx-[3em] text-justify">
        {#if meta?.title}
            <Header {meta} />
        {/if}
        <article>
            {@html content}
        </article>

        <img src={OrnamentImg} alt="" class="mx-auto mt-14 h-8 w-full" />
    </div>

    <Footer />
</div>
