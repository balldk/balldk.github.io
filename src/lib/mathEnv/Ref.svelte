<script lang="ts">
    import { envLookup, type EnvType } from './mathEnv.types'
    import envs from '$lib/mathEnv/math-env.json'
    import { mathEnvStore } from './mathEnvStore.svelte'

    const { type, name, post }: { type: EnvType; name: string; post?: string } = $props()
    // @ts-ignore
    const count = post ? envs[post][type][name] : envs[mathEnvStore.slug][type][name]

    // svelte-ignore non_reactive_update
    let title = post ? `[${envLookup[type]} ${count}, ${post}]` : `${envLookup[type]} ${count}`
    if (type == 'equation') {
        title = post ? `(${count})[${post}]` : `(${count})`
    }
    const label = `${type}:${name}`
    const href = post ? `/posts/${post}/#${label}` : `#${label}`
</script>

<a {href} target={post ? `_blank` : ''} class="color-black !border-none">{title}</a>
