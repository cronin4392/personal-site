<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '$lib/layouts/Page.svelte';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import SpotifyPlaylist from '$lib/components/SpotifyPlaylist.svelte';

	export let data: PageData;
</script>

<Layout image={3}>
	<svelte:fragment slot="title">Knowledge Base</svelte:fragment>
	<svelte:fragment slot="intro">
		<p>
			This is a repository of resources that I have collected over the years. There's everything
			from links, playlists, places, and books. Some of the topics include science, technology,
			engineering, psychology, and world affairs with a bit of fun mixed in.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="container">
			<nav class="tags">
				<TagList tags={data.tags.map(({ tag }) => tag)} />
			</nav>
			<div>
				<section>
					<Typography.H2>Youtube Channels</Typography.H2>
					<ul class="youtubes">
						{#each data.youtube as { name, link, tags, video_id, video_title }}
							<li class="youtube">
								<div>
									<iframe
										src="https://www.youtube-nocookie.com/embed/{video_id}"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen
									/>
								</div>
								<div>
									<Typography.H3 tag="div"><Link href={link}>{name}</Link></Typography.H3>
									<p>{video_title}</p>
									<TagList {tags} />
								</div>
							</li>
						{/each}
					</ul>
				</section>
				<section>
					<Typography.H2>Books</Typography.H2>
					<ul class="list">
						{#each data.books as { name, link, tags }}
							<li>
								<Typography.H3 tag="div"><Link href={link}>{name}</Link></Typography.H3>
								<TagList {tags} />
							</li>
						{/each}
					</ul>
				</section>
				<section>
					<Typography.H2>Playlists</Typography.H2>
					<ul class="list">
						{#each data.spotify as { name, id }}
							<li>
								<Typography.H3>{name}</Typography.H3>
								<SpotifyPlaylist {id} />
							</li>
						{/each}
					</ul>
				</section>
			</div>
		</div>
	</svelte:fragment>
</Layout>

<style lang="scss">
	.tags {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.container {
		display: grid;
		align-items: flex-start;
	}

	section + section {
		margin-top: 4rem;
	}

	.list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;

		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.youtubes {
		display: grid;
		gap: 1rem;
		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.youtube {
		display: grid;
		gap: 1rem;

		iframe {
			width: 100%;
			aspect-ratio: 1.77777778;
			vertical-align: top;
			border-radius: 12px;
		}
	}
</style>
