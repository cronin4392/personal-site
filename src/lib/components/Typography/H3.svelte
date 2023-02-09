<script lang="ts">
	export let tag: string = 'h2';
	let className: string | null = null;
	export { className as class };
</script>

<svelte:element this={tag} class={className}><slot /></svelte:element>

<style>
	* {
		font-size: 2.7rem;
		font-family: var(--font-serif);
	}
</style>
