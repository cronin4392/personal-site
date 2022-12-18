import type { BookEntry } from './types';

const books: Array<BookEntry> = [
	{
		type: 'book',
		name: 'The Secret Lives of Color',
		author: 'Kassia St. Clair',
		link: 'https://www.goodreads.com/book/show/34122206-the-secret-lives-of-color',
		tags: ['design'],
	},
	{
		type: 'book',
		name: 'The Tell-Tale Brain',
		author: 'V.S. Ramachandran',
		link: 'https://www.goodreads.com/book/show/8574712-the-tell-tale-brain',
		tags: ['science', 'psychology'],
	},
	{
		type: 'book',
		name: 'This Is Your Brain on Music',
		author: 'Daniel J. Levitin',
		link: 'https://www.goodreads.com/en/book/show/141565.This_Is_Your_Brain_on_Music',
		tags: ['science', 'psychology', 'music'],
	},
	{
		type: 'book',
		name: 'The Death and Life of Great American Cities',
		author: 'Jane Jacobs',
		link: 'https://www.goodreads.com/book/show/30833.The_Death_and_Life_of_Great_American_Cities',
		tags: ['city-planning', 'psychology'],
	},
	{
		type: 'book',
		name: 'AI Superpowers',
		author: 'Kai-Fu Lee',
		link: 'https://www.goodreads.com/book/show/38242135-ai-superpowers',
		tags: ['ai', 'technology', 'global'],
	},
];

export default books;
