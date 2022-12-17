<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	const employers = [
		{
			name: 'Artists For Humanity',
			href: 'https://afhboston.org',
		},
		{
			name: 'Reaktor',
			href: 'https://reaktor.com',
		},
		{
			name: 'The Outline',
			href: 'https://theoutline.com',
		},
		{
			name: 'Code and Theory',
			href: 'https://codeandtheory.com',
		},
	];
</script>

<header>
	<h1>Hi, <br />I’m Stephen Cronin</h1>
	<p>
		I am a senior software developer with an eye for design. Throughout my career I have worked
		across a wide variety of industries and team compositions. I have extensive experience in web
		development with a focus on the front-end. I pride myself in my ability to work well in a team
		setting and meeting business goals with realistic technical solutions.
	</p>
</header>
<section>
	I currently work at <Link href="https://tulip.co">Tulip</Link> as a software engineer. During the night
	I am an
	<Link href="https://www.visualsss.net">amatuer VJ artist</Link>, creating original realtime
	graphics for live music acts. I’ve previously worked for
	{#each employers as { name, href }, i}
		<Link {href}>{name}</Link>{#if i < employers.length - 1},{' '}{/if}
	{/each} ❧
</section>

<style>
	h1 {
		font-size: 3em;
		line-height: 1.1;
		font-weight: 400;
		margin-top: 1.75em;
		margin-bottom: 1.75em;
	}
</style>
