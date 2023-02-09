<script lang="ts">
	import Layout from '$lib/layouts/Page.svelte';
	import ImageSlider, { Slide } from '$lib/components/ImageSlider';
</script>

<Layout image={4}>
	<svelte:fragment slot="title">Boston Arts Academy</svelte:fragment>
	<svelte:fragment slot="intro">
		<p>Intro</p>
	</svelte:fragment>
	<svelte:fragment slot="content">Hello</svelte:fragment>
</Layout>
