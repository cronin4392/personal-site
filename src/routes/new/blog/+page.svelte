<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '$lib/layouts/Page.svelte';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import Date from '$lib/components/Date.svelte';

	export let data: PageData;
</script>

<Layout image={5}>
	<svelte:fragment slot="title">Blog</svelte:fragment>
	<svelte:fragment slot="content">
		{#each data.posts as post}
			<div class="blur-bg">
				<Typography.H2><Link href={`/blog/${post.slug}`}>{post.title}</Link></Typography.H2>
				<Typography.H3 tag="p"><Date start={post.date} /></Typography.H3>
			</div>
		{/each}
	</svelte:fragment>
</Layout>
