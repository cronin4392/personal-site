<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '$lib/layouts/Page.svelte';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import SpotifyPlaylist from '$lib/components/SpotifyPlaylist.svelte';
	import Card from '$lib/components/Card.svelte';

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
			<nav class="mb-24">
				<TagList tags={data.tags.map(({ tag }) => tag)} />
			</nav>
			<div>
				<section>
					<Typography.H2>Youtube Channels</Typography.H2>
					<div class="grid grid-cols-3 gap-x-4 gap-y-20">
						{#each data.youtube as { name, description, link, tags, video_id, video_title }}
							<Card
								title={name}
								description={description || video_title}
								{tags}
								{link}
								{video_id}
							/>
						{/each}
					</div>
				</section>
				<section>
					<Typography.H2>Books</Typography.H2>
					<div class="grid grid-cols-3 gap-x-4 gap-y-20">
						{#each data.books as { name, link, tags }}
							<Card title={name} {tags} {link} />
						{/each}
					</div>
				</section>
				<section>
					<Typography.H2>Playlists</Typography.H2>
					<div class="grid grid-cols-3 gap-x-4 gap-y-20">
						{#each data.spotify as { name, id }}
							<div>
								<Typography.H3>{name}</Typography.H3>
								<SpotifyPlaylist {id} />
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</svelte:fragment>
</Layout>

<style lang="scss">
	.container {
		display: grid;
		align-items: flex-start;
	}

	section + section {
		margin-top: 4rem;
	}
</style>
