<script lang="ts">
	import type { PageData } from './$types';
	import Link from '$lib/components/Link.svelte';

	export let data: PageData;
</script>

<header>
	<h1>Knowledge Base</h1>
	<p>This is a collection of resources that I have collected over the years.</p>
</header>
<main>
	<section>
		<h2>Youtube Channels</h2>
		{#each data.youtube as { name, link }}
			<Link href={link}>{name}</Link>
		{/each}
	</section>
</main>
