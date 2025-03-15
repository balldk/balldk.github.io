import type { Meta } from '$lib/blog/blog.types'
import path from 'path'
import type { Component } from 'svelte'
import { render } from 'svelte/server'

export async function load() {
    const modules = import.meta.glob('/src/posts/*.md')
    const posts = []
    console.log(await modules['/src/posts/q-analog.md']())
    // console.log(await modules['/src/posts/hagiang.md']())

    for (const pathname in modules) {
        const slug = pathname.split('/').pop()?.replace('.md', '')
        const post = (await modules[pathname]()) as {
            metadata: Meta
            default: Component<any>
        }

        posts.push({
            content: render(post.default).body,
            meta: { ...post.metadata, title: post.metadata?.title || 'Untitled', slug },
        })
    }

    // console.log('Giang posts: ', posts)

    return { posts }
}
