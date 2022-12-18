<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Weave from '$lib/components/Weave/Index.svelte';
</script>

<Nav />

<slot />

<footer>
	<Weave />
</footer>
