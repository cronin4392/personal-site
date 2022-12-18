<script lang="ts">
	export let tags: Array<string>;
</script>

<ul>
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		font-size: 0.5em;
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
