<script lang="ts">
	type Job = {
		company: string;
		title: string;
		start: string;
		end: string;
	};
	const jobs = [
		{
			company: 'Tulip Inc.',
			title: 'Level 4 Software Engineer',
			start: '12/2022',
			end: 'NOW',
		},
		{
			company: 'VISUALSSS',
			title: 'VJ and Projection Artist',
			start: '02/2019',
			end: 'NOW',
		},
		{
			company: 'Artists For Humanity',
			title: 'Director of Creative Technology',
			start: '09/2020',
			end: '06/2022',
		},
		{
			company: 'Reaktor Inc.',
			title: 'Senior Developer',
			start: '07/2018',
			end: '09/2020',
		},
		{
			company: 'The Outline',
			title: 'Lead Front-end Developer',
			start: '09/2016',
			end: '08/2018',
		},
		{
			company: 'The Intercept',
			title: 'Senior Web Developer',
			start: '06/2016',
			end: '09/2016',
		},
		{
			company: 'HYPERHYPER / PHHHOTO',
			title: 'Senior Web Developer',
			start: '01/2015',
			end: '05/2016',
		},
		{
			company: 'Code & Theory',
			title: 'Junior > Senior Front-end Developer',
			start: '09/2011',
			end: '08/2014',
		},
	];
</script>

<header>
	<h1>Stephen Cronin</h1>
</header>

<section>
	<h2>Work<br />Experience</h2>
	<div>
		<ol>
			{#each jobs as { company, title, start, end }, i}
				<li class="job container">
					<h3>{company}</h3>
					<p>{title}</p>
					<div>{start} - {end}</div>
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
</style>
