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
		letter-spacing: 0.01em;
		font-weight: 300;
		font-stretch: expanded;
		margin: 0;
	}
</style>
