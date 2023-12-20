<script lang="ts">
	import DateShort from '$lib/components/DateShort.svelte';
	import jobs from '$lib/data/experience/jobs';
	import { projectsArr as projects } from '$lib/data/projects';
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

<section>
	<h2>Completed<br />Projects</h2>
	<div>
		<ol>
			{#each projects as { name, date, company, url }, i}
				<li class="project container">
					<h3>{name}</h3>
					<div class="date">{date}</div>
					<a href={url} target="_BLANK">View</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	header,
	section {
		box-sizing: border-box;
		min-height: calc(100vh - 14.4vw);
		padding-bottom: 20vh;
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

	a {
		color: inherit;
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
		grid-template-columns: 5fr 5fr 2fr;
	}

	.project {
		display: grid;
		grid-template-columns: 5fr 5fr 2fr;
	}

	.date {
		white-space: pre;
	}
</style>
