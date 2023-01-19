<script>
	import H1 from '$lib/components/Typography/H1.svelte';
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

<header class="blur-bg">
	<H1>{title}</H1>
	<div><Date start={date} /></div>
</header>

<article class="blur-bg">
	<slot />
</article>
