type Project = {
	name: string;
	date: string;
	company: string;
	url: string;
};

export const projectsDict: { [key: string]: Project } = {
	'elden-ring': {
		name: 'Elden Ring',
		date: 'Sep 2022',
		company: 'Self',
		url: 'https://golden-rune-calc.vercel.app/',
	},
	'boston-arts-academy': {
		name: 'Boston Arts Academy Foundation',
		date: 'Sep 2020',
		company: 'Artists For Humanity',
		url: 'https://bostonartsacademy.org',
	},
	afh: {
		name: 'Artists For Humanity',
		date: 'Sep 2020',
		company: 'Artists For Humanity',
		url: 'https://afhboston.org',
	},
};

export const projectsArr = Object.keys(projectsDict).map((id) => ({
	id,
	...projectsDict[id],
}));
