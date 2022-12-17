import type { PageServerLoad } from './$types';
import knowledgebase from '$lib/data/knowledgebase';

export const load = (async () => {
	return knowledgebase;
}) satisfies PageServerLoad;
