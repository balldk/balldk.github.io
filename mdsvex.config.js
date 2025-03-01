import { defineMDSveXConfig } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatexSvelte from 'rehype-katex-svelte'
import rehypeExternalLinks from 'rehype-external-links'

const rehypeKatexPlug = [
    rehypeKatexSvelte,
    {
        macros: {
            '\\Z': '\\mathbb{Z}',
            '\\R': '\\mathbb{R}',
            '\\C': '\\mathbb{C}',
        },
    },
    {
        output: 'mathml',
    },
]

export default defineMDSveXConfig({
    extensions: ['.svelte.md', '.md', '.svx'],
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatexPlug, [rehypeExternalLinks, { target: '_blank', rel: '' }]],
    // layout: './src/routes/blog/+layout.svelte',
})
