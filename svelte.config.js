import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		importAssets(),
		vitePreprocess(),
		// mdsvex({
		// 	extensions: ['.svx'],
		// 	layout: './src/routes/blog/layout.svelte',
		// }),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
