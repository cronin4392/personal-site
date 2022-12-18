<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import LinkList from '$lib/components/LinkList.svelte';

	const employers = [
		{
			text: 'Artists For Humanity',
			href: 'https://afhboston.org',
		},
		{
			text: 'Reaktor',
			href: 'https://reaktor.com',
		},
		{
			text: 'The Outline',
			href: 'https://theoutline.com',
		},
		{
			text: 'Code and Theory',
			href: 'https://codeandtheory.com',
		},
	];
</script>

<header>
	<h1>Hi, <br />I’m Stephen Cronin</h1>
	<p>
		I am a software developer with an eye for design. Throughout my career I have worked across a
		wide variety of industries and team compositions. I have extensive experience in web development
		with a focus on the front-end. I pride myself in my ability to work well in a team setting and
		meeting business goals with realistic technical solutions.
	</p>
</header>
<section class="show-visited">
	I currently work at <Link href="https://tulip.co">Tulip</Link> as a software engineer. During the night
	I am an
	<Link href="https://www.visualsss.net">amatuer VJ artist</Link>, creating original realtime
	graphics for live music acts. I’ve previously worked for
	<LinkList links={employers} /> ❧
</section>

<style>
	h1 {
		font-size: 3em;
		margin-top: 1.75em;
		margin-bottom: 1.75em;
	}

	section {
		--link-font: 'Cloister Swash';
	}
</style>
