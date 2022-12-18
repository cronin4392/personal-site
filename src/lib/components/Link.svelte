<script lang="ts">
	export let href: string;
	export let active: boolean = false;
	$: external = href.indexOf('http') === 0;
</script>

{#if external}
	<a {href} target="_BLANK" rel="noreferrer" data-active={active}><slot /></a>
{:else}
	<a {href} data-active={active}><slot /></a>
{/if}

<style>
	a {
		font-family: var(--link-font, inherit);
		color: var(--link-color);
		text-decoration: none;
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	a[data-active='true'] {
		color: var(--link-active-color);
	}
</style>
