<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '$lib/layouts/Page.svelte';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';

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
			<nav>
				<Typography.Condensed tag="div">
					{#each data.tags as { tag, count }}
						<div>{tag}: {count}</div>
					{/each}
				</Typography.Condensed>
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
				<section class="list">
					<Typography.H2>Playlists</Typography.H2>
					{#each data.playlists as playlist}
						<Link href={playlist.uri}>
							<Typography.H3>{playlist.name}</Typography.H3>
							<p>{playlist.tracks.total} tracks</p>
						</Link>
					{/each}
				</section>
			</div>
		</div>
	</svelte:fragment>
</Layout>

<style lang="scss">
	nav {
		display: none;

		@media screen and (min-width: 720px) {
			// display: block;
		}
	}

	.container {
		display: grid;
		align-items: flex-start;
		// gap: 3rem;

		@media screen and (min-width: 720px) {
			// grid-template-columns: 9rem 1fr;
			// gap: calc(var(--site-padding) / 2);
		}
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
		gap: 2rem;
	}

	.youtube {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;

		iframe {
			width: 100%;
			aspect-ratio: 1.77777778;
			vertical-align: top;
		}
	}
</style>
