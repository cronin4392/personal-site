<script lang="ts">
	import type { PageData } from './$types';
	import Link from '$lib/components/Link.svelte';
	import TagList from '$lib/components/TagList.svelte';

	export let data: PageData;
</script>

<header>
	<h1>Knowledge Base</h1>
	<p>This is a collection of resources that I have collected over the years.</p>
</header>
<main class="container">
	<nav class="tags">
		{#each data.tags as { tag, count }}
			<div>{tag}: {count}</div>
		{/each}
	</nav>
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
</main>

<style lang="scss">
	header {
		margin-bottom: 4rem;
	}

	.container {
		display: grid;
		grid-template-columns: 12rem 1fr;
		gap: calc(var(--site-padding) / 2);
		font-size: 1.5rem;
	}

	.tags {
		font-family: sans-serif;
		font-size: 0.8em;
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
