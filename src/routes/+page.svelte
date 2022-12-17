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

	const nav = [
		{ text: 'Knowledge Base', href: '/knowledge-base' },
		{ text: 'Resume', href: '/resume' },
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
	<LinkList links={employers} /> ❧
</section>
<nav>
	<LinkList links={nav} separator=" • " />
</nav>

<!-- <section>
	<h2 class="footer-text">Thank You</h2>
</section> -->
<style>
	h1 {
		font-size: 3em;
		margin-top: 1.75em;
		margin-bottom: 1.75em;
	}

	/* .footer-text {
		--shadow-inset: 1px;
		--shadow-blur: 4px;
		font-family: 'Cloister Swash';
		font-size: 3em;
		line-height: 1.1;
		font-weight: 400;
		color: transparent;
		text-shadow: var(--shadow-inset) var(--shadow-inset) var(--shadow-blur) var(--background-color),
			0 0 0 var(--color-yellow-dark),
			var(--shadow-inset) var(--shadow-inset) var(--shadow-blur) var(--background-color);
	} */

	section {
		--link-font: 'Cloister Swash';
	}

	nav {
		--link-font: 'Cloister Swash';
		--link-color: var(--text-color);
		font-size: 2em;
		line-height: 1.1;
		margin-top: 1.25em;
		margin-bottom: 1.25em;
	}
</style>
