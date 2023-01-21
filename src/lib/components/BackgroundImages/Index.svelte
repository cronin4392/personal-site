<script lang="ts">
	// import Image from './Image.svelte';
</script>

<div class="container" />

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
		max-width: none;
	}
</style>
