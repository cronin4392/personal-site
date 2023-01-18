<script lang="ts">
	import type { PageData } from './$types';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';

	export let data: PageData;
</script>

<header>
	<Typography.H1 class="blur-bg">Knowledge Base</Typography.H1>
	<p class="blur-bg">
		This is a repository of resources that I have collected over the years. There's everything from
		links, playlists, places, and books. Some of the topics include science, technology,
		engineering, psychology, and world affairs with a bit of fun mixed in.
	</p>
</header>

<div class="container">
	<Typography.Condensed tag="nav" class="blur-bg">
		{#each data.tags as { tag, count }}
			<div>{tag}: {count}</div>
		{/each}
	</Typography.Condensed>
	<article>
		<section>
			<Typography.H2 class="blur-bg">Youtube Channels</Typography.H2>
			<ul class="list">
				{#each data.youtube as { name, link, tags }}
					<li class="blur-bg">
						<Typography.H3 tag="div"><Link href={link}>{name}</Link></Typography.H3>
						<TagList {tags} />
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<Typography.H2 class="blur-bg">Books</Typography.H2>
			<ul class="list">
				{#each data.books as { name, link, tags }}
					<li class="blur-bg">
						<Typography.H3 tag="div"><Link href={link}>{name}</Link></Typography.H3>
						<TagList {tags} />
					</li>
				{/each}
			</ul>
		</section>
	</article>
</div>

<style lang="scss">
	header {
		margin-bottom: 4rem;
	}

	nav {
		display: none;

		@media screen and (min-width: 720px) {
			display: block;
		}
	}

	.container {
		display: grid;
		font-size: 2rem;
		align-items: flex-start;

		@media screen and (min-width: 720px) {
			grid-template-columns: 9rem 1fr;
			gap: calc(var(--site-padding) / 2);
		}
	}

	section + section {
		margin-top: 4rem;
	}

	.list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1rem;
		row-gap: 1.5rem;

		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
