<script lang="ts">
	import type { PageData } from './$types';
	import H1 from '$lib/components/atoms/typography/H1.svelte';
	import H2 from '$lib/components/atoms/typography/H2.svelte';
	import JobItem from '$lib/components/JobItem.svelte';
	export let data: PageData;
</script>

<header class="blur-bg">
	<H1>Experience</H1>
	<p>
		I am a senior web developer with an eye for design. Throughout my career I have worked across a
		wide variety of industries and team compositions. While I do have extensive knowledge in
		front-end development I have worked across the full-stack and am capable of delivering
		end-to-end projects. I pride myself in my ability to work well in a team setting and meeting
		business goals with realistic technical solutions.
	</p>
	<div class="skills">
		<div>
			<h3>Skills</h3>
			<p>
				Typescript, React, Next.js, Node.js, ES6, CSS, HTML Canvas, Firebase, Postgres, Python, PHP,
				Functional Programming, Agile, Touchdesigner
			</p>
		</div>
		<div>
			<h3>Interests</h3>
			<p>Realtime Applications (Unreal Engine), Generative Art, Computer Vision, GLSL</p>
		</div>
	</div>
	<section>
		<H2>Career</H2>
		<ol class="list">
			{#each data.jobs as item}
				<JobItem {...item} />
			{/each}
		</ol>
	</section>
	<section>
		<H2>Freelance</H2>
		<ol class="list">
			{#each data.freelance as item}
				<JobItem {...item} />
			{/each}
		</ol>
	</section>
</header>
<main class="container show-visited" />

<style lang="scss">
	header {
		margin-bottom: 4rem;
	}

	.skills {
		font-size: 0.6em;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.list {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1rem;
		row-gap: 1.5rem;
		font-size: 1.5rem;

		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
