<script lang="ts">
	export let tag: string = 'h2';
	let className: string | null = null;
	export { className as class };
</script>

<svelte:element this={tag} class={className}><slot /></svelte:element>

<style lang="scss">
	* {
		font-size: 4rem;
		line-height: 1;
		font-family: 'Cloister Swash';
		margin-top: 3.5rem;
		margin-bottom: 2.2rem;

		&:first-child {
			margin-top: 0;
		}
	}
</style>
