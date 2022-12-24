<script lang="ts">
	import Image from './Image.svelte';
</script>

<div class="container">
	<Image>
		<img src="./images/1.png?w=600&webp" alt="Flower" />
	</Image>
	<Image>
		<img src="./images/2.png?w=600&webp" alt="Flower" />
	</Image>
	<Image>
		<img src="./images/3.png?w=600&webp" alt="Flower" />
	</Image>
	<Image>
		<img src="./images/4.png?w=600&webp" alt="Flower" />
	</Image>
	<Image>
		<img src="./images/5.png?w=600&webp" alt="Flower" />
	</Image>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -5;
		overflow: hidden;
	}

	img {
		transform: translateX(-50%) translateY(-50%);
	}
</style>
