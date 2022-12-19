<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { page } from '$app/stores';

	let links = [
		{ text: '❧', href: '/' },
		{ text: 'Knowledge Base', href: '/knowledge-base' },
	];
</script>

<nav>
	<ul>
		{#each links as { text, href }}
			<li>
				<Link {href} active={href === $page.route.id}>{text}</Link>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		--link-color: var(--text-color);
		font-family: 'Cloister Swash';
		font-size: 2.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--background-color);
		padding: 0.25rem var(--site-padding);

		li {
			display: inline-block;
		}

		li + li:before {
			content: ' · ';
			white-space: pre;
		}
	}

	.active {
		color: red;
	}
</style>
