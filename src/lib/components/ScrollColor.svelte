<script lang="ts">
	import { onMount } from 'svelte';
	let targetElement: HTMLElement;
	let isSticky = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						isSticky = entry.intersectionRatio < 1 && entry.boundingClientRect.top < 1;
					});
				},
				{ threshold: [1] }
			);

			if (targetElement) {
				observer.observe(targetElement);
			}

			return () => {
				observer.disconnect();
			};
		}
	});
</script>

<div bind:this={targetElement} class="sticky" data-stuck={isSticky}>
	<slot />
</div>

<style>
	.sticky {
		position: sticky;
		z-index: -1;
		top: -1px;
		color: #ffffff;
		transition: color 0.1s ease-in-out;
	}

	.sticky[data-stuck='true'] {
		color: #000000;
	}
</style>
