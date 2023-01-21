<script lang="ts">
	export let tag: string = 'h1';
</script>

<svelte:element this={tag} class="h1">
	<span class="blur-bg">
		<slot />
	</span>
	<span class="swash-text"><slot /></span>
</svelte:element>

<style>
	.h1 {
		font-size: 5rem;
		font-family: var(--font-sans);
		font-stretch: expanded;
		font-weight: 400;
		text-align: right;
		margin-top: 2rem;
		margin-bottom: 2rem;
		position: relative;
	}

	.swash-text {
		--shadow-inset: 1px;
		--shadow-blur: 4px;
		position: absolute;
		bottom: -2rem;
		right: 0;
		z-index: -3;
		font-family: 'Cloister Swash';
		font-size: 15rem;
		line-height: 1.1;
		font-weight: 400;
		color: transparent;
		text-shadow: var(--shadow-inset) var(--shadow-inset) var(--shadow-blur) var(--color-yellow),
			0 0 0 var(--color-yellow-dark),
			var(--shadow-inset) var(--shadow-inset) var(--shadow-blur) var(--color-yellow);
	}
</style>
