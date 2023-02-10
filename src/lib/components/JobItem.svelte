<script lang="ts">
	import Typography from '$lib/components/Typography';
	import Paragraphs from '$lib/components/Paragraphs.svelte';
	import Date from '$lib/components/Date.svelte';
	import MaybeLink from '$lib/components/MaybeLink.svelte';

	export let name: string;
	export let link: string | null | undefined = null;
	export let title: string | null = null;
	export let date: { start: string; end: string };
	export let description: string;
</script>

<li class="job-item">
	<div>
		<Typography.H3>
			<MaybeLink href={link}>
				{name}
			</MaybeLink>
		</Typography.H3>
		<Typography.Condensed tag="div">
			<Date {...date} />
		</Typography.Condensed>
		{#if title}
			<Typography.Condensed tag="p">{title}</Typography.Condensed>
		{/if}
	</div>
	<div>
		<Typography.Condensed tag="div">
			<Paragraphs text={description} />
		</Typography.Condensed>
	</div>
</li>

<style>
	.job-item {
		display: grid;
		grid-template-columns: 1fr 2fr;
		column-gap: 1rem;
	}
</style>
