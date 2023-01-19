<script lang="ts">
	import { DateTime } from 'luxon';

	type EndDate = string | 'Now' | undefined;

	export let start: string;
	export let end: EndDate = undefined;

	const parseEndDate = (date: EndDate) => {
		if (date === undefined) {
			return null;
		}
		if (date === 'Now') {
			return 'Current';
		}
		return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
	};

	const startDate = DateTime.fromISO(start).toLocaleString(DateTime.DATE_MED);
	const endDate = parseEndDate(end);
</script>

{startDate}{#if endDate} - {endDate}{/if}
