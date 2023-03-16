import type { PageServerLoad } from './$types';
import knowledgebase from '$lib/data/knowledgebase';
// import { getPlaylists } from '$lib/lib/spotify';

export const load = (async () => {
	// Compute tags
	let tagsDict: { [key: string]: number } = {};
	[...knowledgebase.youtube, ...knowledgebase.books].forEach(({ tags }) => {
		tags.forEach((tag) => {
			if (!(tag in tagsDict)) {
				tagsDict = { ...tagsDict, [tag]: 1 };
			} else {
				tagsDict = { ...tagsDict, [tag]: tagsDict[tag] + 1 };
			}
		});
	});
	const tagsList = Object.keys(tagsDict).map((tag) => ({ tag, count: tagsDict[tag] }));
	tagsList.sort((a, b) => a.tag.localeCompare(b.tag));

	return { ...knowledgebase, tags: tagsList };
}) satisfies PageServerLoad;
