<script lang="ts">
	export let image: number;

	import Typography from '$lib/components/Typography';

	import Image1 from './images/1.png';
	import Image2 from './images/2.png';
	import Image3 from './images/3.png';
	import Image4 from './images/4.png';
	import Image5 from './images/5.png';

	const images = [Image1, Image2, Image3, Image4, Image5];
</script>

<header>
	<div class="image-wrapper">
		<div class="image">
			<img src={images[image % images.length]} alt="Flower" />
		</div>
	</div>
	<Typography.H1>
		<slot name="title" />
	</Typography.H1>
	{#if $$slots.intro}
		<span class="blur-bg">
			<slot name="intro" />
		</span>
	{/if}
</header>

<article class="blur-bg">
	<slot name="content" />
</article>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-top: 40vh;
	}
	.image-wrapper {
		position: fixed;
		inset: 0;
		z-index: -2;
		pointer-events: none;
	}

	.image {
		position: absolute;
		top: 4rem;
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
