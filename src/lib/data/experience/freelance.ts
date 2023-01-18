import { DateTime } from 'luxon';

export default [
	{
		name: 'VJ and Projection Artist',
		description:
			'In my free time I perform as a Video Jockey [VJ], working extensively in Touchdesigner. In Touchdesigner I have made my own VJ software. I typically perform at live electronic music events as well as create art installations.',
		date: {
			start: DateTime.utc(2019, 2, 1).toString(),
			end: 'Now',
		},
		projects: [
			{
				name: 'Instagram',
				description: 'I have a collection of my work posted on my Instagram.',
				link: 'https://instagram.com/visualsssssssss',
			},
			{
				name: 'Sound Boy Ent.',
				description: 'I produce music video visualizers for the Sound Boy Ent. collective.',
				link: 'https://www.youtube.com/channel/UC6c2zLxlkigyJRNjqhbdGYA',
			},
			{
				name: 'Video Tutorials',
				description:
					'In spirit of the stewardship of the Touchdesigner community I have started creating video tutorials to show some of the techniques in my work.',
				link: 'https://www.youtube.com/watch?v=-bAPfoBSybY',
			},
		],
	},
	{
		name: 'Font Foundries',
		description:
			'I have worked on a few font foundry websites built on top of the Fontdue platform.',
		date: {
			start: DateTime.utc(2018, 2, 6).toString(),
			end: 'Now',
		},
		projects: [
			{
				name: 'General Type Studio',
				description:
					"I've worked with General Type Studio for a number of years, initially creating the website and updating it when new fonts are released.",
				link: 'https://www.generaltypestudio.com/',
			},
			{
				name: 'Type By',
				description: 'I helped Typeby relaunch their font foundry on the Fontdue platform.',
				link: 'https://www.typeby.com/',
			},
			{
				name: 'Fontdue',
				description: 'The ecommerce platform for independent type foundries',
				link: 'https://www.fontdue.com/',
			},
		],
	},
];
