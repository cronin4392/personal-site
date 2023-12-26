<script lang="ts">
	import DateShort from '$lib/components/DateShort.svelte';
	import ScrollColor from '$lib/components/ScrollColor.svelte';
	import jobs from '$lib/data/experience/jobs';
	import { projectsArr as projects } from '$lib/data/projects';
</script>

<header class="header">
	<div class="fill">
		<ScrollColor>
			<h1>Stephen Cronin</h1>
		</ScrollColor>
	</div>
	<div class="container">
		<p>
			Software developer based in Somerville,&nbsp;MA specializing in frontend web development. I am
			also an amateur video artist and dabble in calligraphy.
		</p>
		<ul class="links">
			<li><a href="https://github.com/cronin4392" target="_blank">Github</a></li>
			<li><a href="https://linkedin.com/cronin4392" target="_blank">LinkedIn</a></li>
		</ul>
		<div class="down-arrow">↓</div>
	</div>
	<!-- <ScrollColor>
		<div class="down-arrow">↓</div>
	</ScrollColor> -->
</header>

<section>
	<ScrollColor>
		<h2>Work<br />Experience</h2>
	</ScrollColor>
	<div class="content">
		<ol class="list">
			{#each jobs as { name, title, date }}
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
	<ScrollColor>
		<h2>Completed<br />Projects</h2>
	</ScrollColor>
	<div class="content">
		<ol class="list">
			{#each projects as { name, date, company, url }, i}
				<li class="project container">
					<h3 class="name">{name}</h3>
					<div class="date">{date}</div>
					<a class="link" href={url} target="_BLANK">Visit →</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	:global(html) {
		font-family: 'Mier', 'serif';
		background-color: #ff3d22;
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
		min-height: 100vh;
	}

	.fill {
		flex-grow: 1;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 1.4rem;
		font-size: 1.4rem;
	}

	.links {
	}

	.content {
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
			padding-left: 60px;
			padding-right: 60px;
		}
	}

	.header .container {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		gap: 2rem;
	}

	.down-arrow {
		display: flex;
		justify-content: flex-end;
		font-size: 3em;
	}

	h1,
	h2 {
		@media screen and (min-width: 1200px) {
			font-size: 14.4vw;
		}

		font-size: 11.55vw;
		line-height: 0.8;
		font-weight: 700;
		text-transform: uppercase;
	}

	h3 {
		font-size: 1rem;
		font-weight: 400;
	}

	.down-arrow {
		// display: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul,
	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.list {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.list li {
		border-bottom: 2px solid currentColor;
		padding-top: 1rem;
		padding-bottom: 1rem;

		&:first-child {
			border-top: 2px solid currentColor;
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
