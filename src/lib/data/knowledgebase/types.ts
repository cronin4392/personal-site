export type YoutubeEntry = {
	type: 'youtube';
	name: string;
	link: string;
	tags: Array<string>;
	video_id: string;
	video_title: string;
};

export type BookEntry = {
	type: 'book';
	name: string;
	author: string;
	link: string;
	tags: Array<string>;
};

export type KnowledgebaseEntry = YoutubeEntry | BookEntry;
