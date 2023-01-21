<script lang="ts">
	import BackgroundImages from '$lib/components/BackgroundImages/Index.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="show-visited">
	<slot />
</main>

<BackgroundImages />

<style>
	main {
		padding-top: 64px;
		padding-bottom: var(--site-padding);
	}
</style>
