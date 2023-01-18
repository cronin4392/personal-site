<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	export let href: string | undefined | null;
</script>

{#if href}
	<Link {href}><slot /></Link>
{:else}
	<slot />
{/if}
