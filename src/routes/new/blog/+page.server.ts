import { error } from '@sveltejs/kit';
import type { Frontmatter } from '$lib/types/frontmatter';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const paths = import.meta.glob<Frontmatter>('./**/*.svx');
	const posts = await Promise.all(
		Object.keys(paths).map(async (path) => {
			const { metadata } = await paths[path]();
			const slug = path.split('/').at(-2);
			if (!slug || !metadata) {
				throw error(404, 'Not found!');
			}
			return { slug, ...metadata };
		})
	);

	return { posts };
}) satisfies PageServerLoad;
