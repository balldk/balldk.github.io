<script lang="ts">
    import type { MarkdownData } from '$lib/blog/blog.types'
    import HeaderIllustration from '$assets/img/grapevine.png'
    import Footer from '$lib/blog/Footer.svelte'
    import Header from '$lib/blog/Header.svelte'
    import OrnamentImg from '$assets/img/ornament-line.png'
    import { onMount } from 'svelte'

    import hljs from 'highlight.js/lib/core'
    import 'highlight.js/styles/base16/solarized-light.css'
    import javascript from 'highlight.js/lib/languages/javascript'
    import python from 'highlight.js/lib/languages/python'
    import bash from 'highlight.js/lib/languages/bash'
    import bnf from 'highlight.js/lib/languages/bnf'
    import plaintext from 'highlight.js/lib/languages/plaintext'
    import vanvo from '$lib/utils/vanvo'
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('python', python)
    hljs.registerLanguage('vanvo', vanvo)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('bnf', bnf)
    hljs.registerLanguage('undefined', plaintext)

    let { data }: { data: MarkdownData } = $props()

    let { PostContent, meta } = data

    onMount(() => {
        hljs.highlightAll()
    })
</script>

<svelte:head>
    <title>{meta.title || 'Khoa ND | Blog'}</title>
</svelte:head>

<div class="bg-background h-screen">
    <img src={HeaderIllustration} alt="" class="mx-auto mb-0 mt-[-4.5em] z-[-1] h-52" />

    <article class="blog-post lg:mx-auto lg:w-[46em] md:mx-[3em] mx-[1em] text-justify">
        {#if meta?.title}
            <Header {meta} />
        {/if}
        <content>
            <PostContent />
        </content>

        <img src={OrnamentImg} alt="" class="mx-auto mt-14 h-8 w-full" />
    </article>

    <Footer />
</div>
