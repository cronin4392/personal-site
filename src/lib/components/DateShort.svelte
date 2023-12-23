<script lang="ts">
	import { DateTime } from 'luxon';

	type EndDate = string | 'Now' | undefined;

	export let start: string;
	export let end: EndDate = undefined;

	const parseDate = (date: string) => {
		return DateTime.fromISO(date).setZone('utc').toFormat('MM/yyyy');
	};

	const parseEndDate = (date: EndDate) => {
		if (date === undefined) {
			return null;
		}
		if (date === 'Now') {
			return 'TODAY';
		}
		return parseDate(date);
	};

	const startDate = parseDate(start);
	const endDate = parseEndDate(end);
</script>

{#if endDate}{endDate}&#32;-&nbsp;{startDate}{/if}
