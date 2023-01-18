import { DateTime } from 'luxon';

export default [
	{
		name: 'Artists For Humanity',
		title: 'Director of Creative Technology',
		description: `10 years after working at Artists For Humanity as a teenager I came back and founded the Creative Technology Studio. The studio's goal was to service our clients technology needs. We primarily focused on web solutions and interactive art installations.
The studio's adult staff consisted of myself, another full time developer, and 3 part time developers and designers. We mentored a group of 20 teenagers, teaching them the fundementals of coding and product design and involving them in the client work we did.`,
		date: {
			start: DateTime.utc(2020, 9, 1).toString(),
			end: DateTime.utc(2022, 6, 24).toString(),
		},
		projects: [
			{
				name: 'Boston Arts Academy',
				description: `During the 7 month long project I led a team of 5 (myself, Visual Designer, UX Designer, Copywriter, and Project Manager) to build the client a new website from the ground up.`,
				link: 'https://bostonartsacademy.org',
			},
			{
				name: 'AFHBoston.org',
				description: `Created a modern, up to date website using Typescript, Next.js, Vercel, and Storyblok.`,
				link: 'https://afhboston.org',
			},
		],
		quote: {
			quote:
				'In all my years, I’ve actually never seen a website project be run so well or move along so smoothly. There will always be issues, delays, etc. on a project this comprehensive, but I’ve been around a lot of website projects in my career and this one stands out as the best in class example of how to do it.',
			attribution:
				'Jeff Rosica, Chair, Boston Arts Academy Foundation and Chief Executive Officer & President, Avid Technology',
		},
	},
	{
		name: 'Reaktor Inc.',
		title: 'Senior Developer',
		link: 'https://reaktor.com',
		description: `Reaktor Inc. is a software development company offering premium development and design services to companies. The company has over 400 employees in offices in 7 countries. They operate on a model of self managing teams. Employees take on many different roles including sales and marketing on top of their consulting roles.`,
		date: {
			start: DateTime.utc(2018, 7, 1).toString(),
			end: DateTime.utc(2020, 9, 1).toString(),
		},
		projects: [
			{
				name: '+POOL',
				description:
					'Developed a live water quality dashboard to help spread awareness of the water quality in the East River of NYC.',
				link: 'https://water.pluspool.org',
			},
			{
				name: 'Viacom',
				description:
					'Worked on a small embedded team to build out reporting tools for the Advanced Advertising department. We dealt with parsing large volumes of Nielsen data and programatically generating Powerpoint documemnts.',
			},
			{
				name: 'First Look Media',
				description:
					"Embedded within FLM's in-house team, I developed a parallax landing page and the video player for the Topic.com relaunch.",
			},
			{
				name: 'HBO',
				description: 'Developed multiple microsites for Game of Thrones promotions.',
			},
		],
	},
	{
		name: 'The Outline',
		title: 'Lead Front-end Developer',
		description: `The Outline was an online publication founded by Joshua Topolsky. Once described as “A New Yorker for millennials”. I was one of the founding employees taking on the role of Lead Front-end developer where he worked on the initial development of the site and continued his role working closely alongside the editorial team.`,
		date: {
			start: DateTime.utc(2016, 9, 1).toString(),
			end: DateTime.utc(2018, 8, 1).toString(),
		},
		links: [
			{
				text: 'The Liberal Landgrab',
				link: 'https://theoutline.com/post/2454/the-liberal-landgrab',
			},
			{
				text: 'Pet Wellness is a Scam',
				link: 'https://theoutline.com/post/3127/all-natural-pet-care-is-a-scam',
			},
			{
				text: 'The Enduring Power of Aunties',
				link: 'https://theoutline.com/post/2547/the-enduring-power-of-aunties',
			},
			{
				text: 'Long Live the Group Chat',
				link: 'https://theoutline.com/post/2315/long-live-the-group-chat',
			},
			{
				text: 'Sputnik Monroe',
				link: 'https://theoutline.com/post/1606/sputnik-monroe-pro-wrestler-memphis-integration',
			},
		],
	},
	{
		name: 'The Intercept',
		title: 'Senior Web Developer',
		description: `The Intercept is an online publication initially founded by Glenn Greenwald to house the documents leaked by Edward Snowden. I managed the front-end development of the site as well as helped build out features and sections for the editorial team.`,
		date: {
			start: DateTime.utc(2016, 6, 1).toString(),
			end: DateTime.utc(2016, 9, 1).toString(),
		},
		links: [
			{
				text: 'SIDtoday Document Archive',
				link: 'https://theintercept.com/snowden-sidtoday/',
			},
			{
				text: 'Portuguese Homepage',
				link: 'https://theintercept.com/brasil/',
			},
			{
				text: 'Article Series Feature',
				link: 'https://theintercept.com/series/the-teflon-toxin/',
			},
		],
	},
	{
		name: 'HYPERHYPER / PHHHOTO',
		title: 'Senior Web Developer',
		description:
			'I was a lead web engineer at HYPERHYPER, a web agency servicing clients, as well as at PHHHOTO, a social network that had over a million active users a day.',
		date: {
			start: DateTime.utc(2015, 1, 1).toString(),
			end: DateTime.utc(2016, 5, 1).toString(),
		},
	},
	{
		name: 'Code & Theory',
		title: 'Junior&ensp;>&ensp;Senior Front-end Developer',
		description:
			"I worked as a front-end developer at the web agency Code and Theory, progressing from junior level to senior level in 3 years. I created websites for a variety of clients including Dr. Pepper Snapple Group, L'Oréal, and Brown–Forman.",
		date: {
			start: DateTime.utc(2011, 9, 1).toString(),
			end: DateTime.utc(2014, 8, 1).toString(),
		},
	},
];
