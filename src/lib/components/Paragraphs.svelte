<script lang="ts">
	export let text: string;
	const paragraphs = text.trim().split('\n');
</script>

{#each paragraphs as p}
	<p>{p}</p>
{/each}

<style>
	p {
		margin: 0;
	}
</style>
