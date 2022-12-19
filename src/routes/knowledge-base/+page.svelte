<script lang="ts">
	import type { PageData } from './$types';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';

	export let data: PageData;
</script>

<header>
	<h1 class="swash">Knowledge Base</h1>
	<p>
		This is a repository of resources that I have collected over the years. There's everything from
		links, playlists, places, and books. Some of the topics include science, technology,
		engineering, psychology, and world affairs with a bit of fun mixed in.
	</p>
</header>
<main class="container">
	<nav class="font-tags">
		{#each data.tags as { tag, count }}
			<div>{tag}: {count}</div>
		{/each}
	</nav>
	<div>
		<section>
			<h2>Youtube Channels</h2>
			<ul class="list">
				{#each data.youtube as { name, link, tags }}
					<li>
						<Link href={link}>{name}</Link>
						<TagList {tags} />
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h2>Books</h2>
			<ul class="list">
				{#each data.books as { name, link, tags }}
					<li>
						<Link href={link}>{name}</Link>
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

	h1 {
		font-size: 2.6rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 400;
	}

	h2 {
		font-size: 1.6rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 300;
		margin-bottom: 1rem;
	}

	section + section {
		margin-top: 4rem;
	}

	.container {
		display: grid;
		grid-template-columns: 9rem 1fr;
		gap: calc(var(--site-padding) / 2);
		font-size: 1.5rem;
	}

	.list {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 1rem;
		row-gap: 1.5rem;
	}
</style>
