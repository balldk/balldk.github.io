import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { imagePreprocessor } from 'svimg'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import mdsvexConfig from './mdsvex/mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    vitePreprocess(),
    imagePreprocessor({
      inputDir: 'static',
      outputDir: 'static/g',
      webp: true,
      avif: true
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '$posts/*': './src/posts/*',
      '$assets/*': './src/assets/*',
    },
  },
}

export default config
