<script lang="ts">
	import Layout from '$lib/layouts/Page.svelte';
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

	const friends = [
		{ text: 'General Type', href: 'https://www.generaltypestudio.com/' },
		{ text: 'Atomic Farmer', href: 'https://atomicfarmer.com/' },
		{ text: '', href: 'https://www.fontdue.com/' },
		{ text: 'Dave Lucia', href: 'https://davelucia.com/' },
	];
</script>

<Layout image={1}>
	<svelte:fragment slot="title">Hi, I’m <br />Stephen Cronin</svelte:fragment>
	<svelte:fragment slot="intro">
		<p>
			I am a software developer with an eye for design. Throughout my career I have worked across a
			wide variety of industries and team compositions. I have extensive experience in web
			development with a focus on the front-end. I pride myself in my ability to work well in a team
			setting and meeting business goals with realistic technical solutions.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p class="swash">
			I currently work at <Link href="https://tulip.co">Tulip</Link> as a software engineer. During the
			night I am an
			<Link href="https://www.visualsss.net">amatuer VJ artist</Link>, creating original realtime
			graphics for live music acts. I’ve previously worked for
			<LinkList links={employers} /> ❧
		</p>
	</svelte:fragment>
</Layout>

<style lang="scss">
	.swash {
		--link-font: 'Cloister Swash';
	}
</style>
