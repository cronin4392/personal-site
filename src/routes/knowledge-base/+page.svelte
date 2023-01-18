<script lang="ts">
	import type { PageData } from './$types';
	import H1 from '$lib/components/atoms/typography/H1.svelte';
	import H2 from '$lib/components/atoms/typography/H2.svelte';
	import H3 from '$lib/components/atoms/typography/H3.svelte';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';

	export let data: PageData;
</script>

<header>
	<H1 class="blur-bg">Knowledge Base</H1>
	<p class="blur-bg">
		This is a repository of resources that I have collected over the years. There's everything from
		links, playlists, places, and books. Some of the topics include science, technology,
		engineering, psychology, and world affairs with a bit of fun mixed in.
	</p>
</header>
<main class="container show-visited">
	<nav class="font-tags blur-bg">
		{#each data.tags as { tag, count }}
			<div>{tag}: {count}</div>
		{/each}
	</nav>
	<div>
		<section>
			<H2 class="blur-bg">Youtube Channels</H2>
			<ul class="list">
				{#each data.youtube as { name, link, tags }}
					<li class="blur-bg">
						<H3 tag="div"><Link href={link}>{name}</Link></H3>
						<TagList {tags} />
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<H2 class="blur-bg">Books</H2>
			<ul class="list">
				{#each data.books as { name, link, tags }}
					<li class="blur-bg">
						<H3 tag="div"><Link href={link}>{name}</Link></H3>
						<TagList {tags} />
					</li>
				{/each}
			</ul>
		</section>
	</div>
</main>

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
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1rem;
		row-gap: 1.5rem;

		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
