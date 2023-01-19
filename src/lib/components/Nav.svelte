<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/components/Link.svelte';

	const links = [
		{ text: '❧', href: '/' },
		{ text: 'Experience', href: '/experience' },
		{ text: 'Knowledge Base', href: '/knowledge-base' },
		{ text: 'Blog', href: '/blog' },
	];

	const isActive = (link: string, route: string | null) => {
		if (link === '/') {
			return link === route;
		}
		return route?.indexOf(link) === 0;
	};
</script>

<nav>
	<ul>
		{#each links as { text, href }}
			<li>
				<Link {href} active={isActive(href, $page.route.id)}>{text}</Link>
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

	.active {
		color: red;
	}
</style>
