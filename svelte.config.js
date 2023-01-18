import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		importAssets(),
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
