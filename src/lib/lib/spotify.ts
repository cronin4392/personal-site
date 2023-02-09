import Spotify from 'spotify-web-api-node';
import { SPOTIFY_ACCESS_TOKEN } from '$env/static/private';

export type Playlist = {
	description: 'string';
	external_urls: { spotify: string };
	href: string;
	id: string;
	images: [unknown];
	name: string;
	primary_color: null;
	public: boolean;
	snapshot_id: string;
	tracks: { href: string; total: number };
	type: 'playlist';
	uri: string;
};

const spotify = new Spotify();
console.log('SPOTIFY API TOKEN', SPOTIFY_ACCESS_TOKEN);
spotify.setAccessToken(SPOTIFY_ACCESS_TOKEN);

export const getPlaylists = async () => {
	const data = await spotify.getUserPlaylists('1217619176');
	return data.body.items;
};
