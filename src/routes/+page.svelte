<script lang="ts">
	import jobs from '$lib/data/experience/jobs';
	import DateShort from '$lib/components/DateShort.svelte';
</script>

<header>
	<h1>Stephen Cronin</h1>
</header>

<section>
	<h2>Work<br />Experience</h2>
	<div>
		<ol>
			{#each jobs as { name, title, date }, i}
				<li class="job container">
					<h3>{name}</h3>
					<p>{title}</p>
					<div class="date"><DateShort {...date} /></div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	header,
	section {
		min-height: calc(100vh - 14.4vw);
	}
	.container {
		padding-left: 80px;
		padding-right: 80px;
	}
	h1,
	h2 {
		font-size: 14.4vw;
		line-height: 0.8;
		text-transform: uppercase;
		color: #000000;
		position: sticky;
		z-index: -1;
		top: 0;
		font-stretch: normal;
	}

	h3 {
		font-size: 1rem;
		font-weight: 400;
	}

	ol,
	ul {
		list-style: none;
		padding: 0;
	}

	li {
		border-bottom: 1px solid currentColor;
		padding-top: 1rem;
		padding-bottom: 1rem;

		&:first-child {
			border-top: 1px solid currentColor;
		}
	}

	.job {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr;
	}

	.date {
		white-space: pre;
	}
</style>
