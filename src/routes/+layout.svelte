<script>
	import '../app.css';
	import { contactStore, hoursStore, Navigation } from '$lib';

	export let data;

	contactStore.set(data.contact);
	hoursStore.set(data.hours);
</script>

<Navigation />
<slot />
