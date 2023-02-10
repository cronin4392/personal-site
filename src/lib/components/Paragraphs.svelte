<script lang="ts">
	export let text: string;
	const paragraphs = text.trim().split('\n');
</script>

{#each paragraphs as p}
	<p>{p}</p>
{/each}

<style>
	p:first-child {
		margin-top: 0;
	}
	p:last-child {
		margin-bottom: 0;
	}
</style>
