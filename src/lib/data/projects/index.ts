type Project = {
	name: string;
	date: string;
	company: string;
	url: string;
};

export const projectsDict: { [key: string]: Project } = {
	'stephane-elbaz': {
		name: 'Stéphane Elbaz',
		date: 'Mar 2023',
		company: 'Stéphane Elbaz',
		url: 'https://www.stephaneelbaz.com/',
	},
	visualsss: {
		name: 'VISUALSSS',
		date: 'Mar 2023',
		company: 'Stephen Cronin',
		url: 'https://www.visualsss.net/',
	},
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
	outline: {
		name: 'The Outline',
		date: 'Sep 2017',
		company: 'The Outline',
		url: 'https://theoutline.com',
	},
	hyperhyper: {
		name: 'HyperHyper',
		date: '2014',
		company: 'HyperHyper',
		url: 'http://hyperhyper.com/',
	},
};

export const projectsArr = Object.keys(projectsDict).map((id) => ({
	id,
	...projectsDict[id],
}));
