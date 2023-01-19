<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/components/Link.svelte';

	const links = [
		{ text: '❧', href: '/' },
		{ text: 'Experience', href: '/experience', matches: ['/projects'] },
		{ text: 'Knowledge Base', href: '/knowledge-base' },
		{ text: 'Blog', href: '/blog' },
	];

	const isActive = (matches: Array<string | null>, route: string | null) => {
		return matches.reduce((acc, link) => {
			if (acc || !link || !route) {
				return acc;
			}
			if (link === '/') {
				return link === route;
			}
			return route.indexOf(link) === 0;
		}, false);
	};
</script>

<nav>
	<ul>
		{#each links as { text, href, matches = [] }}
			<li>
				<Link {href} active={isActive([href, ...matches], $page.route.id)}>{text}</Link>
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
		top: 0;
		left: 0;
		right: 0;
		padding: 0.25rem var(--site-padding);
		background-color: var(--color-yellow);
		z-index: 10;

		li {
			display: inline-block;
		}

		li + li:before {
			content: ' · ';
			white-space: pre;
		}
	}
</style>
