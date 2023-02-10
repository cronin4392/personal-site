import Spotify from 'spotify-web-api-node';
import {
	SPOTIFY_ACCESS_TOKEN,
	SPOTIFY_REDIRECT_URI,
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
} from '$env/static/private';

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

const spotify = new Spotify({
	clientId: SPOTIFY_CLIENT_ID,
	clientSecret: SPOTIFY_CLIENT_SECRET,
	redirectUri: SPOTIFY_REDIRECT_URI,
});

export const generateAuthUrl = () =>
	spotify.createAuthorizeURL(
		[
			'user-read-currently-playing',
			'playlist-read-private',
			'playlist-read-collaborative',
			'user-top-read',
			'user-read-recently-played',
			'user-library-read',
		],
		'pewpew'
	);

export const getAuthCode = (code: string) => {
	spotify
		.authorizationCodeGrant(code)
		.then((data) => {
			console.log('The token expires in ' + data.body['expires_in']);
			console.log('The access token is ' + data.body['access_token']);
			console.log('The refresh token is ' + data.body['refresh_token']);

			spotify.setAccessToken(data.body['access_token']);
			spotify.setRefreshToken(data.body['refresh_token']);
		})
		.catch((err) => {
			console.error('SPOTIFY AUTH ERROR', err.body.error.message);
		});
};

export const getPlaylists = async () => {
	spotify.setAccessToken(SPOTIFY_ACCESS_TOKEN);
	const data = await spotify.getUserPlaylists('1217619176').catch((err) => {
		console.error('SPOTIFY API ERROR', err.body.error.message);
		return { body: { items: [] } };
	});
	return data.body.items;
};
