import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, loadEnv } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const serverConfig = {
        host: true,
        port: Number(env.VITE_PORT),
        strictPort: true,
        fs: {
            allow: ['./posts'],
        },
    }

    return {
        server: serverConfig,
        preview: serverConfig,
        plugins: [enhancedImages(), sveltekit(), tailwindcss()],
    }
})
