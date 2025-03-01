import fs from 'fs'
import path from 'path'
import { render } from 'svelte/server'

export async function load() {
    const files = fs.readdirSync('./src/posts/')
    const postsPromise = files.map(async (filename) => {
        const slug = path.parse(filename).name
        const post = await import(`$posts/${slug}.md`)
        const { title, date } = post.metadata || {}
        const body = render(post.default).body
        return {
            slug,
            title,
            date,
        }
    })
    return {
        posts: await Promise.all(postsPromise),
    }
}
