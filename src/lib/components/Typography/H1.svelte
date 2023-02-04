<script lang="ts">
	export let tag: string = 'h1';
</script>

<svelte:element this={tag} class="h1">
	<span class="blur-bg">
		<slot />
	</span>
</svelte:element>

<style>
	.h1 {
		font-size: 5rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 400;
		text-align: left;
		margin-top: 2rem;
		margin-bottom: 2rem;
		position: relative;
	}
</style>
