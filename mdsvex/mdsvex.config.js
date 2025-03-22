import { defineMDSveXConfig } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatexSvelte from 'rehype-katex-svelte'
import rehypeExternalLinks from 'rehype-external-links'
import remarkMathEnv from './remarkMathEnv.js'
import { visit } from 'unist-util-visit'

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
    remarkPlugins: [remarkMath, remarkMathEnv],
    rehypePlugins: [rehypeKatexPlug, [rehypeExternalLinks, { target: '_blank', rel: '' }]],
    // layout: './src/routes/blog/+layout.svelte',
})
