<script lang="ts">
	import '../app.css';
	import BackgroundImages from '$lib/components/BackgroundImages/Index.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="show-visited pt-16">
	<slot />
</main>

<BackgroundImages />

<style>
	main {
		padding-bottom: var(--site-padding);
	}
</style>
