<script lang="ts">
	export let tag: string = 'h2';
	let className: string = '';
	export { className as class };
</script>

<svelte:element this={tag} class={`${className} text-3xl`}><slot /></svelte:element>

<style>
	* {
		font-family: var(--font-serif);
	}
</style>
