<script lang="ts">
	import Typography from '$lib/components/Typography';
	import Condensed from './Typography/Condensed.svelte';
	export let tags: Array<string>;
</script>

<ul class="flex flex-wrap gap-2">
	{#each tags as tag}
		<li class="rounded-full border border-rose-400 px-5 py-1 text-base text-neutral-500">{tag}</li>
	{/each}
</ul>
