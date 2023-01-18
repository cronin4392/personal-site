<script lang="ts">
	import type { PageData } from './$types';
	import Typography from '$lib/components/Typography';
	import JobItem from '$lib/components/JobItem.svelte';
	export let data: PageData;
</script>

<header class="blur-bg">
	<Typography.H1>Experience</Typography.H1>
	<p>
		I am a senior web developer with an eye for design. Throughout my career I have worked across a
		wide variety of industries and team compositions. While I do have extensive knowledge in
		front-end development I have worked across the full-stack and am capable of delivering
		end-to-end projects. I pride myself in my ability to work well in a team setting and meeting
		business goals with realistic technical solutions.
	</p>
</header>

<article>
	<div class="skills">
		<div>
			<Typography.H2>Skills</Typography.H2>
			<Typography.Condensed tag="p">
				Typescript, React, Next.js, Node.js, ES6, CSS, HTML Canvas, Firebase, Postgres, Python, PHP,
				Functional Programming, Agile, Touchdesigner
			</Typography.Condensed>
		</div>
		<div>
			<Typography.H2>Interests</Typography.H2>
			<Typography.Condensed tag="p">
				Realtime Applications (Unreal Engine), Generative Art, Computer Vision, GLSL
			</Typography.Condensed>
		</div>
	</div>
	<section>
		<Typography.H2>Career</Typography.H2>
		<ol class="list">
			{#each data.jobs as item}
				<JobItem {...item} />
			{/each}
		</ol>
	</section>
	<section>
		<Typography.H2>Freelance</Typography.H2>
		<ol class="list">
			{#each data.freelance as item}
				<JobItem {...item} />
			{/each}
		</ol>
	</section>
</article>

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
