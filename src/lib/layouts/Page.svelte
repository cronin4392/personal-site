<script lang="ts">
	import Typography from '$lib/components/Typography';
</script>

<header>
	<Typography.H1><slot name="title" /></Typography.H1>
	<slot name="intro" />
</header>

<article>
	<slot name="content" />
</article>
