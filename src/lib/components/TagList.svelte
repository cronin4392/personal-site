<script lang="ts">
	import Typography from '$lib/components/Typography';
	import Condensed from './Typography/Condensed.svelte';
	export let tags: Array<string>;
</script>

<Typography.Condensed tag="ul">
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</Typography.Condensed>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		display: inline-block;

		&:after {
			white-space: pre;
			content: ', ';
		}

		&:last-child:after {
			content: '';
		}
	}
</style>
