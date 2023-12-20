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
					<h3 class="name">{name}</h3>
					<p class="title">{title}</p>
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
					<h3 class="name">{name}</h3>
					<div class="date">{date}</div>
					<a class="link" href={url} target="_BLANK">View</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	:global(html) {
		font-family: 'Franklin Gothic', 'serif';
		background-color: #4f0fd6;
		color: #ffffff;
		font-size: 20px;
		font-stretch: expanded;
		font-variant-numeric: tabular-nums;

		@media screen and (min-width: 720px) {
			font-size: 24px;
		}

		@media screen and (min-width: 960px) {
			font-size: 26px;
		}
	}

	header,
	section {
		box-sizing: border-box;
		min-height: calc(100vh - 14.4vw);
		padding-bottom: 20vh;
	}
	.container {
		padding-left: 20px;
		padding-right: 20px;

		@media screen and (min-width: 720px) {
			padding-left: 40px;
			padding-right: 40px;
		}

		@media screen and (min-width: 1200px) {
			padding-left: 80px;
			padding-right: 80px;
		}
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

	ol {
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

	.job,
	.project {
		display: grid;
		gap: 0.3rem 1rem;
		grid-template-areas:
			'one two'
			'three three';
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

		@media screen and (min-width: 960px) {
			grid-template-areas: 'one two three';
			grid-template-columns: minmax(0, 5fr) minmax(0, 5fr) minmax(0, 2fr);
		}
	}

	.job {
		.name {
			grid-area: one;
		}
		.title {
			grid-area: three;
		}
		.date {
			grid-area: two;
			display: flex;
			justify-content: flex-end;
		}

		@media screen and (min-width: 960px) {
			.name {
				grid-area: one;
			}
			.title {
				grid-area: two;
			}
			.date {
				grid-area: three;
			}
		}
	}

	.project {
		.name {
			grid-area: one;
		}
		.date {
			grid-area: three;
		}
		.link {
			grid-area: two;
			display: flex;
			justify-content: flex-end;
		}

		@media screen and (min-width: 960px) {
			.name {
				grid-area: one;
			}
			.date {
				grid-area: two;
			}
			.link {
				grid-area: three;
			}
		}
	}

	.date {
		white-space: pre;
	}
</style>
