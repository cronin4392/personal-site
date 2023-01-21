<div class="images">
	<slot />
</div>

<style>
	.images {
		height: 50vh;
		display: flex;
		gap: 1rem;
		overflow: auto;
		margin: 2rem calc(-1 * var(--site-padding));
		padding-left: var(--site-padding);
		padding-right: var(--site-padding);
	}
</style>
