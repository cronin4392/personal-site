<script lang="ts">
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
	<h3>
		<MaybeLink href={link}>
			{name}
		</MaybeLink>
	</h3>
	{#if title}<p>{title}</p>{/if}
	<div>
		<Date {...date} />
	</div>
	<Paragraphs text={description} />
</li>
