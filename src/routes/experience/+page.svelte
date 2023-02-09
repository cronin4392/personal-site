<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '$lib/layouts/Page.svelte';
	import Typography from '$lib/components/Typography';
	import Link from '$lib/components/Link.svelte';
	import JobItem from '$lib/components/JobItem.svelte';
	export let data: PageData;
	const { experience, projects } = data;
</script>

<Layout image={2}>
	<svelte:fragment slot="title">Experience</svelte:fragment>
	<svelte:fragment slot="content">
		<section>
			<Typography.H2>Selected Projects</Typography.H2>
			<ul class="list">
				{#each projects as item}
					<li>
						<Typography.H3>
							<Link href="/projects/{item.id}">{item.name}</Link>
						</Typography.H3>
						<Typography.Condensed tag="p">{item.company}</Typography.Condensed>
					</li>
				{/each}
			</ul>
		</section>

		<div class="skills">
			<div>
				<Typography.H2>Skills</Typography.H2>
				<Typography.Condensed tag="p">
					Typescript, React, Next.js, Node.js, ES6, CSS, HTML Canvas, Firebase, Postgres, Python,
					PHP, Functional Programming, Agile, Touchdesigner
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
				{#each experience.jobs as item}
					<JobItem {...item} />
				{/each}
			</ol>
		</section>
		<section>
			<Typography.H2>Freelance</Typography.H2>
			<ol class="list">
				{#each experience.freelance as item}
					<JobItem {...item} />
				{/each}
			</ol>
		</section>
	</svelte:fragment>
</Layout>

<style lang="scss">
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

		:global(p) {
			margin: 0;
		}
	}
</style>
