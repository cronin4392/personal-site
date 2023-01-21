<div class="image"><slot /></div>

<style lang="scss">
	.image {
		display: flex;
		flex-shrink: 0;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>
