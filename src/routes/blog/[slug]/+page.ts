import { mathEnvStore } from '$lib/mathEnv/mathEnvStore.svelte.js'
import fs from 'fs'
import path from 'path'
import { render } from 'svelte/server'
import { browser } from '$app/environment'

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
        const envsFile = await import('$lib/math-env.json')
        const envs = { ...envsFile.default, [slug]: post.metadata.envs }
        if (!browser) {
            console.log('On server...')
            fs.writeFileSync('./src/lib/math-env.json', JSON.stringify(envs, null, 4))
        }
        mathEnvStore.slug = slug

        return {
            PostContent: post.default,
            meta: { ...post.metadata, slug },
        }
    } catch (err) {
        console.error('Error loading the post:', err)
        return {
            status: 500,
        }
    }
}
