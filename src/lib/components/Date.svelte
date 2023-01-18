<script lang="ts">
	import { DateTime } from 'luxon';
	export let start: string;
	export let end: string | 'Now';

	const startDate = DateTime.fromISO(start).toLocaleString(DateTime.DATE_MED);
	const endDate =
		end === 'Now' ? 'Current' : DateTime.fromISO(end).toLocaleString(DateTime.DATE_MED);
</script>

{startDate} - {endDate}
