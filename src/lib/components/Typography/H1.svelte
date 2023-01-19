<script lang="ts">
	export let tag: string = 'h1';
	let className: string | null = null;
	export { className as class };
</script>

<svelte:element this={tag} class={className}><slot /></svelte:element>

<style>
	* {
		font-size: 2.6rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 400;
		margin-top: 16rem;
		margin-bottom: 2rem;
	}
</style>
