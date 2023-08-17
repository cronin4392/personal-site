<script lang="ts">
	import { SVG } from '@svgdotjs/svg.js';
	import { onMount } from 'svelte';
	let flower: HTMLElement;

	onMount(() => {
		var draw = SVG().addTo(flower).size(300, 1500);
		// draw.rect(100, 100).attr({ fill: '#f06' });
		draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z');
	});
</script>

<div bind:this={flower} class="flower"></div>

<style>
	.flower {
		margin-top: 1px;
		display: inline-block;
		outline: 1px solid blue;
	}
</style>
