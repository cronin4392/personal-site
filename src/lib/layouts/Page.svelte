<script lang="ts">
	import Typography from '$lib/components/Typography';
</script>

<header>
	<div class="image-wrapper">
		<div class="image">
			<img src="./images/1.png" alt="Flower" />
		</div>
	</div>
	<Typography.H1>
		<slot name="title" />
	</Typography.H1>
	<span class="blur-bg">
		<slot name="intro" />
	</span>
</header>

<article class="blur-bg">
	<slot name="content" />
</article>

<style lang="scss">
	.image-wrapper {
		padding-bottom: 55vh;
		position: relative;
		z-index: -2;
	}

	.image {
		position: absolute;
		top: -2rem;
		right: 0;
		display: flex;
		max-width: 50vw;
		max-height: 120vh;
		transform: rotate(15deg);
		transform-origin: 67% 30%;

		img {
			flex-shrink: 1;
			height: auto;
			width: auto;
			object-fit: contain;
		}
	}
</style>
