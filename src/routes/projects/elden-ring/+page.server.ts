import type { PageServerLoad } from './$types';

export const load = (async () => {
	// const imagePaths = import.meta.glob('./images/*.png');
	// const thumbPaths = import.meta.glob('./images/*.png', {
	// 	query: { format: 'webp', width: '800' },
	// 	import: 'default',
	// });
	// const images = await Promise.all(
	// 	Object.keys(imagePaths).map(async (path) => {
	// 		const image = await imagePaths[path]();
	// 		const thumb = await thumbPaths[path]();
	// 		return { thumb, image, path };
	// 	})
	// );
	// console.log(images);
	// return { images };
}) satisfies PageServerLoad;
