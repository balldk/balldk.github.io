import fs from 'fs'
import path from 'path'
import { render } from 'svelte/server'

export async function entries() {
    const files = fs.readdirSync('./src/posts/')
    const filenames = files.map((filename) => ({
        slug: path.parse(filename).name,
    }))
    return filenames
}

export async function load({ params }) {
    const { slug } = params

    try {
        const post = await import(`$posts/${slug}.md`)
        return {
            content: render(post.default).body,
            meta: { ...post.metadata, slug },
        }
    } catch (err) {
        console.error('Error loading the post:', err)
        return {
            status: 500,
        }
    }
}
