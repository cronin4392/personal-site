<script lang="ts">
	export let tag: string;
	let className: string | null = null;
	export { className as class };
</script>

<svelte:element this={tag} class={className}><slot /></svelte:element>

<style>
	* {
		font-family: 'Franklin Gothic', sans-serif;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.01em;
	}
</style>
