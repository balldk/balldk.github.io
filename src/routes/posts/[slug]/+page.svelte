<script lang="ts">
    import type { MarkdownData } from '$lib/blog/blog.types'
    import Footer from '$lib/blog/Footer.svelte'
    import Header from '$lib/blog/Header.svelte'
    import { onMount } from 'svelte'

    import hljs from 'highlight.js/lib/core'
    import 'highlight.js/styles/base16/solarized-light.css'
    import javascript from 'highlight.js/lib/languages/javascript'
    import python from 'highlight.js/lib/languages/python'
    import bash from 'highlight.js/lib/languages/bash'
    import bnf from 'highlight.js/lib/languages/bnf'
    import plaintext from 'highlight.js/lib/languages/plaintext'
    import vanvo from '$lib/utils/vanvo'
    import { pageLoadStore } from '$lib/pageLoadStore.svelte'
    import { fade, fly, slide } from 'svelte/transition'
    import { cn } from '$lib/utils/cn'
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('python', python)
    hljs.registerLanguage('vanvo', vanvo)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('bnf', bnf)
    hljs.registerLanguage('undefined', plaintext)

    let { data }: { data: MarkdownData } = $props()

    let { PostContent, meta } = data

    onMount(() => {
        setTimeout(() => hljs.highlightAll(), 1)
    })
</script>

<svelte:head>
    <title>{meta.title || 'Khoa ND | Blog'}</title>
</svelte:head>

<div class="bg-background h-screen">
    <enhanced:img
        src="$assets/img/grapevine.png"
        alt=""
        class="mx-auto mb-0 mt-[-4.5em] z-[-1] h-52 w-auto"
    />

    {#key pageLoadStore.loaded}
        <article
            in:fly={{ y: 10 }}
            class={cn(
                'blog-post lg:mx-auto lg:w-[46em] md:mx-[3em] mx-[1em] text-justify',
                pageLoadStore.loaded ? '' : 'opacity-0'
            )}
        >
            {#if meta?.title}
                <Header {meta} />
            {/if}
            <content>
                <PostContent />
            </content>

            <enhanced:img
                src="$assets/img/ornament-line.png"
                alt=""
                class="mx-auto mt-14 h-8 w-full"
            />
        </article>

        <Footer />
    {/key}
</div>
