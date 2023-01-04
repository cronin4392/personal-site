<script lang="ts">
	import { createNoise2D } from 'simplex-noise';
	const noise2D = createNoise2D();

	const randomIntFromInterval = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
	const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a));
	const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
	const range = (x1: number, y1: number, x2: number, y2: number, a: number) =>
		lerp(x2, y2, invlerp(x1, y1, a));

	const randomSeed = () => randomIntFromInterval(-200, 1000);

	let y = Math.abs(noise2D(randomSeed(), randomSeed()));
	let top = y * 200;
	let left = range(-1, 1, -25, 125, noise2D(randomSeed(), randomSeed()));
	let delay = y * 1.5;
	const scale = range(-1, 1, 0.05, 0.6, noise2D(randomSeed(), randomSeed()));
	const rot = noise2D(randomSeed(), randomSeed()) * 45;
</script>

<div
	class="image"
	style={`--top: ${top}vh; --left: ${left}vw; --delay: ${delay}s; --scale: ${scale}; --rot: ${rot}deg`}
>
	<slot />
</div>

<style lang="scss">
	.image {
		// --offset-x: var(--right-side, 97vw);
		position: absolute;
		top: var(--top);
		// left: calc(var(--offset-x) + var(--left));
		left: var(--left);
		width: 0px;
		height: 0px;
		transform: scale(var(--scale)) rotateZ(var(--rot));
		width: 16vw;

		opacity: 0;
		animation: fadeInOut 3s ease-in-out var(--delay) forwards;

		@keyframes fadeInOut {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}

	.image:nth-child(even) {
		// --right-side: 0vw;
	}
</style>
