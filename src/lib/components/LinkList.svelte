<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let links: Array<{ text: string; href: string }> = [];
	export let separator: string = ', ';
</script>

{#each links as { text, href }, i}
	{@const isLast = i == links.length - 1}
	{#if isLast} and {/if}<Link {href}>{text}</Link>{#if !isLast}{separator}{/if}
{/each}
