<script>
	import '../app.css';
	import {
		contactStore,
		Footer,
		hoursStore,
		Navigation,
		navigationStore,
		servicesStore,
	} from '$lib';

	export let data = {};

	contactStore.set(data.contact);
	hoursStore.set(data.hours);
	navigationStore.set(data.navigation.links);
	servicesStore.set(data.services);
</script>

<Navigation />
<slot />
<Footer data={data.footer} />
