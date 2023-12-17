import type { PageServerLoad } from './$types';
import experience from '$lib/data/experience';
import { projectsArr as projects } from '$lib/data/projects';

export const load = (async () => {
	return { experience, projects };
}) satisfies PageServerLoad;
