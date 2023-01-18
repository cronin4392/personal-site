import type { PageServerLoad } from './$types';
import experience from '$lib/data/experience';

export const load = (async () => {
	return experience;
}) satisfies PageServerLoad;
