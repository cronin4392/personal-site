<script lang="ts">
	export let tag: string = 'h2';
	let className: string | null = null;
	export { className as class };
</script>

<svelte:element this={tag} class={className}><slot /></svelte:element>

<style>
	* {
		font-size: 2.2rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 300;
		margin-top: 3.5rem;
		margin-bottom: 1.5rem;
	}
</style>
