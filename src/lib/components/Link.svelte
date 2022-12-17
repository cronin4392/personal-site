<script lang="ts">
	export let href: string;
	$: external = href.indexOf('http') === 0;
</script>

{#if external}
	<a {href} target="_BLANK" rel="noreferrer"><slot /></a>
{:else}
	<a {href}><slot /></a>
{/if}
