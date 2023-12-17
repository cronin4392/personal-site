<script>
	import Layout from '$lib/layouts/Page.svelte';
	import Date from '$lib/components/Date.svelte';

	// This file needs to be js as mdsvex has issues parsing Typescript
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Layout image={5}>
	<svelte:fragment slot="title">{title}</svelte:fragment>
	<svelte:fragment slot="intro">
		<Date start={date} />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<slot />
	</svelte:fragment>
</Layout>
