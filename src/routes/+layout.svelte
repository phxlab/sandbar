<script>
	import '../app.css';
	import {
		contactStore,
		Footer,
		hoursStore,
		Navigation,
		navigationStore,
		scrollLock,
		servicesStore,
	} from '$lib';

	export let data = {};

	contactStore.set(data.contact);
	hoursStore.set(data.hours);
	navigationStore.set(data.navigation.links);
	servicesStore.set(data.services);
	scrollLock.set(false);
</script>

<div class:scroll-lock={$scrollLock}>
	<Navigation />
	<slot />
	<Footer data={data.footer} />
</div>

<style>
	.scroll-lock {
		overflow: hidden;
		height: 100vh;
	}
</style>
