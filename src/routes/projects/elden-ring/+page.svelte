<script lang="ts">
	import Layout from '$lib/layouts/Page.svelte';
	import ImageSlider, { Slide } from '$lib/components/ImageSlider';
</script>

<Layout>
	<svelte:fragment slot="title">Elden Ring Rune Calculator</svelte:fragment>
	<svelte:fragment slot="intro">
		<p>
			Like a lot of people I got really into Elden Ring when it came out. This was the first
			FromSoftware game I'd ever played and there was definately a learning curve. Aside from it
			being a difficult game many of the mechanisms are left up to the player to discover.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			One of the game mechanisms I didn't realize was consuming golden runes. For a good part of the
			beginning of the game I didn't know what golden runes did so I would collect golden runes and
			not use them. When it finally dawned on me that they would give runes upon consumption. I
			easily gained 5-10 levels consuming all the ones I had saved up. After that initial gorge I
			would try to optimize the number I consumed in order to level up without runes left over. (For
			those who haven't played Elden Ring, when you die you lose all your runes but not your golden
			runes. So if you have a lot of runes left over after leveling there's a potential you will
			lose them.)
		</p>
		<p>
			Everytime I wanted to level up I'd meticulously sit there with the calculator app on my phone
			summing up my golden runes to find the optimal amount. This got old really quick. I thought to
			myself I'm a programmer after all, this is the kind of problem made for me. Before I started
			jamming on the keyboard I figured I'd Google around and see if someone else had already solved
			this problem. As I went through the results I was finding a lot of fully fledged Elden Ring
			build calculators which had too much noise and wasn't focused on my problem at hand.
		</p>
		<p>
			Then finally, I landed on one that was focused on adding up runes and doing the level up math.
			While it wasn't perfect it was in the direction of exactly what I was looking for and what do
			you know, the creator had the Github repo linked for others to contribute. I saw that it was
			made using Next.js and Typescript which is the stack I was looking for.
		</p>
		<ImageSlider>
			<Slide>
				<img src="./images/before.png" alt="YO!" />
			</Slide>
		</ImageSlider>
		<p>
			One of the game mechanisms I didn't realize was consuming golden runes. For a good part of the
			beginning of the game I didn't know what golden runes did so I would collect golden runes and
			not use them. When it finally dawned on me that they would give runes upon consumption. I
			easily gained 5-10 levels consuming all the ones I had saved up. After that initial gorge I
			would try to optimize the number I consumed in order to level up without runes left over. (For
			those who haven't played Elden Ring, when you die you lose all your runes but not your golden
			runes. So if you have a lot of runes left over after leveling there's a potential you will
			lose them.)
		</p>
		<p>
			Everytime I wanted to level up I'd meticulously sit there with the calculator app on my phone
			summing up my golden runes to find the optimal amount. This got old really quick. I thought to
			myself I'm a programmer after all, this is the kind of problem made for me. Before I started
			jamming on the keyboard I figured I'd Google around and see if someone else had already solved
			this problem. As I went through the results I was finding a lot of fully fledged Elden Ring
			build calculators which had too much noise and wasn't focused on my problem at hand.
		</p>
		<p>
			Then finally, I landed on one that was focused on adding up runes and doing the level up math.
			While it wasn't perfect it was in the direction of exactly what I was looking for and what do
			you know, the creator had the Github repo linked for others to contribute. I saw that it was
			made using Next.js and Typescript which is the stack I was looking for.
		</p>
		<ImageSlider>
			<Slide>
				<img src="./images/golden-rune-calc-1.png" alt="YO!" />
			</Slide>
			<Slide>
				<img src="./images/golden-rune-calc-2.png" alt="YO!" />
			</Slide>
		</ImageSlider>
	</svelte:fragment>
</Layout>
