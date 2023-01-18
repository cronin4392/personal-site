<script lang="ts">
	import H3 from '$lib/components/atoms/typography/H3.svelte';
	import Paragraphs from '$lib/components/Paragraphs.svelte';
	import Date from '$lib/components/Date.svelte';
	import MaybeLink from '$lib/components/MaybeLink.svelte';

	export let name: string;
	export let link: string | null | undefined = null;
	export let title: string | null = null;
	export let date: { start: string; end: string };
	export let description: string;
</script>

<li>
	<H3>
		<MaybeLink href={link}>
			{name}
		</MaybeLink>
	</H3>
	{#if title}<p>{title}</p>{/if}
	<div>
		<Date {...date} />
	</div>
	<Paragraphs text={description} />
</li>
