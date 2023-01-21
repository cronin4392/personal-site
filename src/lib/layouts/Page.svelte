<script lang="ts">
	import Typography from '$lib/components/Typography';
</script>

<header>
	<Typography.H1>
		<span class="blur-bg">
			<slot name="title" />
		</span>
	</Typography.H1>
	<span class="blur-bg">
		<slot name="intro" />
	</span>
</header>

<article class="blur-bg">
	<slot name="content" />
</article>
