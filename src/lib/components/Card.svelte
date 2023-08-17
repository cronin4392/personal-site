<script lang="ts">
	export let title: string;
	export let description: string | null = null;
	export let tags: string[];
	export let link: string;
	export let video_id: string | null = null;

	import Link from './Link.svelte';
	import TagList from './TagList.svelte';
	import Typography from './Typography';
</script>

<div>
	<!-- {#if video_id}
		<div class="mb-5">
			<iframe
				class="aspect-video w-full rounded-2xl align-top"
				src="https://www.youtube-nocookie.com/embed/{video_id}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	{/if} -->
	<div>
		<Typography.H3 tag="div"><Link href={link}>{title}</Link></Typography.H3>
		{#if description}
			<p class="mt-2 text-lg">{description}</p>
		{/if}
		<div class="mt-3">
			<TagList {tags} />
		</div>
	</div>
</div>
