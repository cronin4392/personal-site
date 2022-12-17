<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let links: Array<{ text: string; href: string }> = [];
	export let separator: string = ', ';
</script>

{#each links as { text, href }, i}
	<Link {href}>{text}</Link>{#if i < links.length - 1}{separator}{/if}
{/each}
